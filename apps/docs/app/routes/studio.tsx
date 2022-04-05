import { LoaderFunction, redirect } from "remix";

// Redirect users to the Studio app.
export const loader: LoaderFunction = async () => {
  return redirect("https://spor.sanity.studio");
};
