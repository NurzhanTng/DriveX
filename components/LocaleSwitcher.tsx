"use client";

import React, { useTransition } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { locales } from "@/config";

const LocaleSwitcher = ({ className = "" }) => {
  const t = useTranslations("LocaleSwitcher");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale });
    });
    // http://localhost:3000/ru/images?locale=en&type=images
  };

  return (
    <div className={className}>
      <Select disabled={isPending} onValueChange={onSelectChange}>
        <SelectTrigger className="locale-select">
          <SelectValue placeholder={t("label")} />
        </SelectTrigger>
        <SelectContent className="locale-select-content">
          {locales.map((cur) => (
            <SelectItem key={cur} className="shad-select-item" value={cur}>
              {t("locale", { locale: cur })}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LocaleSwitcher;
