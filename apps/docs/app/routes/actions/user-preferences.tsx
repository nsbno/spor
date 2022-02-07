import { ActionFunction, json, LoaderFunction, redirect } from "remix";
import { isUserPreferences } from "~/features/user-preferences/UserPreferencesContext";
import { getUserPreferenceSession } from "~/utils/userPreferences.server";

export const action: ActionFunction = async ({ request }) => {
  const session = await getUserPreferenceSession(request);
  const formData = await request.formData();

  const userPreferences = {
    userType: formData.get("userType")?.toString(),
    technology: formData.get("technology")?.toString(),
  };

  if (!isUserPreferences(userPreferences)) {
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
