import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/config";

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || "";
  if (!locales.includes(locale as Locale)) notFound();

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
