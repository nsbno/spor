import { redirect } from "react-router";

// Redirect users to the Studio app.
export const loader = async () => {
  if (process.env.NODE_ENV === "development") {
    return redirect("http://localhost:4444");
  }
  return redirect("https://vydesignmanual.sanity.studio/");
};
