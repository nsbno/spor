import { LoaderFunction, redirect } from "react-router";

// Just redirect users to the overview page
export const loader: LoaderFunction = async () => {
  return redirect("/components/overview");
};
