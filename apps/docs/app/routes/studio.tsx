import { LoaderFunction, redirect } from "@remix-run/node";

// Redirect users to the Studio app.
export const loader: LoaderFunction = async () => {
  if (process.env.NODE_ENV === "development") {
    return redirect("http://localhost:3333");
  }
  return redirect("https://spor.sanity.studio");
};
