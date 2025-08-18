import { LoaderFunction } from "react-router";

export const loader: LoaderFunction = () => {
  return new Response("OK", { status: 200 });
};
