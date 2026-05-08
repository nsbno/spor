import crypto from "node:crypto";

import { ActionFunctionArgs } from "react-router";

import { MetabaseCustomEventSchema } from "~/utils/analytics/metabase";
import { MetabaseRecord } from "~/utils/analytics/metabaseCore";
import { sporSessionIdCookie } from "~/utils/spor-session-id.server";

interface MetabaseMessage {
  record: Record<string, unknown>;
  recordId: string;
  recordModel: string;
  recordModelVersion: number;
  recordService: "app" | "web" | "spor";
  recordUserId: string | "NO_PERSONAL_DATA";
  messageId: string;
  messageSentAt: string;
  messageFormat: "frontend-v3";
}

async function sendRecordToMetabase(
  parameters: MetabaseRecord,
  sessionId: string,
  hostname: string,
) {
  const endpoint = hostname.includes("design.vy.no")
    ? "https://api.cdp.vydev.io/analytics/frontend/v3"
    : "https://api.test.cdp.vydev.io/analytics/frontend/v3";

  const recordUserId = "NO_PERSONAL_DATA";
  const recordModelVersion = Number(parameters.recordModelVersion);

  let recordId;
  const record = { ...parameters.record };

  const generalData = {
    terminalId: parameters.terminalId ?? undefined,
    timestamp: parameters.timestamp ?? new Date().toISOString(),
    channel: "spor",
    sessionId: sessionId,
  };

  const message: MetabaseMessage = {
    record: { ...record, ...generalData },
    recordId: recordId ?? crypto.randomUUID(),
    messageId: crypto.randomBytes(16).toString("hex"),
    messageSentAt: new Date().toISOString(),
    messageFormat: "frontend-v3",
    recordModel: screamingSnakeToKebabCase(parameters.recordModel as string),
    recordModelVersion: recordModelVersion,
    recordService: "spor",
    recordUserId: recordUserId,
  };

  const serializedMessage = Buffer.from(JSON.stringify(message)).toString(
    "base64",
  );

  const signature = crypto
    .createHmac("sha1", `${message.messageId}-${message.messageSentAt}`)
    .update(serializedMessage)
    .digest("hex");

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      signature: signature,
    },
    body: serializedMessage,
  });

  if (!response.ok) {
    console.error(
      `Failed to send record to Metabase. Status: ${response.status}, Response: ${await response.text()}`,
    );
  }

  return response.ok;
}

export async function action(arguments_: ActionFunctionArgs) {
  const data = await arguments_.request.json();
  const record = data["record"];
  const context = data["context"] ?? {};

  const sporSessionId = await sporSessionIdCookie.parse(
    arguments_.request.headers.get("cookie") ?? null,
  );

  if (data["recordModel"] === "track") {
    const recordResult = MetabaseCustomEventSchema.safeParse(record);
    if (!recordResult.success) {
      console.error("Failed to parse record", recordResult.error.issues);
      return Response.json(
        { success: false, error: recordResult.error.issues },
        { status: 400 },
      );
    }
  }

  const metabaseRecord: MetabaseRecord = {
    recordModel: data["recordModel"],
    record: data["record"],
    recordModelVersion: Number(data["recordModelVersion"]),
    terminalId: data["terminalId"] ?? undefined,
    timestamp: new Date().toISOString(),
    context: context,
  };

  const hostname = new URL(arguments_.request.url).hostname;
  const success = await sendRecordToMetabase(
    metabaseRecord,
    sporSessionId,
    hostname,
  );

  return Response.json({ success });
}

function screamingSnakeToKebabCase(input: string | null): string {
  if (!input) {
    return "";
  }
  return input.toLowerCase().replaceAll("_", "-");
}
