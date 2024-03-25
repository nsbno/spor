import { createCookie } from "@remix-run/node";
import { Brand } from "@vygruppen/spor-react";

const COOKIE_NAME = "brand";

const cookie = createCookie(COOKIE_NAME, {
  secure: true,
  httpOnly: true, // TODO: burde denne kunne endres med js?
  maxAge: 60 * 60 * 24,
  path: "/",
});

export const getBrandFromCookie = async (cookieHeader: string) => {
  const parsed = await cookie.parse(cookieHeader);
  return parsed as Brand;
};

export const setBrandInCookie = async (brand: Brand) => {
  return cookie.serialize(brand);
};
