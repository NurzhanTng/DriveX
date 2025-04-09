import React from "react";
import Image from "next/image";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useTranslations } from "next-intl";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations("AuthPages");

  return (
    <div className="flex min-h-screen">
      <LocaleSwitcher className="absolute right-4 top-4" />

      <section className="bg-brand hidden w-1/2 items-center justify-center p-10 lg:flex">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            width={224}
            height={82}
            className="h-auto"
          />

          <div className="space-y-5 text-white">
            <h1 className="h1">{t("mainTitle")}</h1>
            <p className="body-1">{t("mainDescription")}</p>
          </div>

          <Image
            src="/assets/images/files.png"
            alt="logo"
            width={280}
            height={280}
            className="mx-auto transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>
      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 pt-20 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <Image
            src="/assets/icons/logo-full-brand.svg"
            alt="logo"
            width={224}
            height={82}
            className="h-auto w-[200px] lg:w-[250px]"
          />
        </div>

        {children}
      </section>
    </div>
  );
};

export default Layout;
