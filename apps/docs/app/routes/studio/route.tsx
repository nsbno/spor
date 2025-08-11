import { redirect } from "react-router";

// Redirect users to the Studio app.
export const loader = async () => {
  if (process.env.NODE_ENV === "development") {
    return redirect("http://localhost:3333");
  }
  return redirect("https://spor.sanity.studio");
};
