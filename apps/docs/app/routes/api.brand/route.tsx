import { ActionFunctionArgs, json } from "@remix-run/node";
import { Brand } from "@vygruppen/spor-react";
import { setBrandInCookie } from "~/utils/brand-cookie.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const brandString = formData.get("brand") as string;
  const brand = parseStringToBrand(brandString);
  if (!brand) {
    return json({ error: "Brand is required" }, { status: 400 });
  }

  return json(
    { status: "ok" },
    { status: 200, headers: { "Set-Cookie": await setBrandInCookie(brand) } },
  );
};

function parseStringToBrand(input: string): Brand | undefined {
  if (Object.values(Brand).includes(input as Brand)) {
    return input as Brand;
  }
  return undefined;
}
