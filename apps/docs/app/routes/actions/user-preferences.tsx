import { ActionFunction, json, LoaderFunction, redirect } from "@remix-run/node";
import { isValidUserPreferences } from "~/features/user-preferences/UserPreferencesContext";
import { getUserPreferencesSession } from "~/utils/userPreferences.server";

export const action: ActionFunction = async ({ request }) => {
  const session = await getUserPreferencesSession(request);
  const formData = await request.formData();

  const userPreferences = {
    userType: formData.get("userType")?.toString(),
    technology: formData.get("technology")?.toString(),
    tokensFormat: formData.get("tokensFormat")?.toString(),
  };

  if (!isValidUserPreferences(userPreferences)) {
    return json({ success: false, message: "Invalid user preferences" });
  }

  session.setUserPreferences(userPreferences);
  return json(
    { success: true },
    {
      headers: {
        "Set-Cookie": await session.commit(),
      },
    }
  );
};

export const loader: LoaderFunction = () => redirect("/", { status: 404 });
