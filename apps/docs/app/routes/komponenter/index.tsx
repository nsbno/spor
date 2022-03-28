import { LoaderFunction, redirect } from "remix";

// Just redirect users to the overview page
export const loader: LoaderFunction = async () => {
  return redirect("/komponenter/oversikt");
};
