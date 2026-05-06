export type MetabaseRecord = {
  recordModel: string;
  record: Record<string, unknown>;
  recordModelVersion: number;
  terminalId?: string;
  timestamp?: string;
  context?: Record<string, unknown>;
};

/**
 * Send a record to Metabase.
 * You should normally avoid using this function directly unless you know what you're doing. Use the `sendCustomEvent` function instead.
 */
export function sendRecordToMetabase(parameters: MetabaseRecord) {
  const timestamp = new Date().toISOString();

  const metabaseRecord: MetabaseRecord = {
    recordModel: parameters.recordModel,
    record: parameters.record,
    recordModelVersion: parameters.recordModelVersion,
    timestamp: parameters.timestamp ?? timestamp,
    context: {
      ...getPageContext(),
      ...parameters.context,
    },
  };

  return fetch("/api/metabase", {
    method: "post",
    body: JSON.stringify(metabaseRecord),
  });
}

export function sendPageViewEvent({
  name,
  recordModelVersion = 1,
}: {
  name: string;
  recordModelVersion?: number;
}) {
  return sendRecordToMetabase({
    recordModel: "spor",
    record: {
      event: "page_viewed",
      name: name,
    },
    recordModelVersion,
  });
}

function getPageContext() {
  if (typeof document === "undefined") {
    return {};
  }
  return {
    pageTitle: document.title,
    pagePath: globalThis.location.pathname,
    pageHostname: globalThis.location.hostname,
    pageReferrer: document.referrer || undefined,
  };
}
