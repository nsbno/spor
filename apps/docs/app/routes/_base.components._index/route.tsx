import { LoaderFunction, redirect } from "@remix-run/node";

// Just redirect users to the overview page
export const loader: LoaderFunction = async () => {
  return redirect("/components/overview");
};
