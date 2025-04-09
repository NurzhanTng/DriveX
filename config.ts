import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ["en", "ru"] as const;

export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
  "/": "/",
  "/pathnames": "/pathnames",
  "/sign-in": {
    en: "/sign-in",
    ru: "/sign-in",
  },
  "/sign-up": {
    en: "/sign-up",
    ru: "/sign-up",
  },
};

export const localePrefix: LocalePrefix<Locales> = "always";
