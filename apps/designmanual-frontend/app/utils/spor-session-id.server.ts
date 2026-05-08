import { createCookie } from "react-router";

export const sporSessionIdCookie = createCookie("sporSessionId", {
  maxAge: 60 * 60 * 6,
});
