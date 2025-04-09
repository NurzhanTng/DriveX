"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { getNavItems } from "@/constants";
import { Link, usePathname } from "@/navigation";
import { cn } from "@/lib/utils";
import FileUploader from "@/components/FileUploader";
import { Button } from "@/components/ui/button";
import { signOutUser } from "@/lib/actions/users.actions";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

interface Props {
  $id: string;
  accountId: string;
  fullName: string;
  avatar: string;
  email: string;
}

const MobileNavigation = ({
  $id: ownerId,
  accountId,
  fullName,
  avatar,
  email,
}: Props) => {
  const t = useTranslations("MobileNavigation");
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="mobile-header">
      <Image
        src="/assets/icons/logo-full-brand.svg"
        alt="logo"
        width={120}
        height={52}
        className="h-auto"
      />

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Image
            src="/assets/icons/menu.svg"
            alt="logo"
            width={30}
            height={30}
          />
        </SheetTrigger>
        <SheetContent className="shad-sheet h-screen px-3">
          <SheetTitle>
            <div className="header-user">
              <Image
                src={avatar}
                alt="avatar"
                width={44}
                height={44}
                className="header-user-avatar"
              />

              <div className="sm:hidden lg:block">
                <p className="subtitle-2 capitalize">{fullName}</p>
                <p className="caption">{email}</p>
              </div>
            </div>

            <Separator className="bg-light-200/20 mb-4" />
          </SheetTitle>

          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {getNavItems(params.locale as string).map(
                ({ url, name, icon }) => (
                  <Link key={name} href={url} className="lg:w-full">
                    <li
                      className={cn(
                        "mobile-nav-item",
                        pathname === url && "shad-active",
                      )}
                    >
                      <Image
                        src={icon}
                        alt={name}
                        height={24}
                        width={24}
                        className={cn(
                          "nav-icon",
                          pathname === url && "nav-icon-active",
                        )}
                      />

                      <p>{name}</p>
                    </li>
                  </Link>
                ),
              )}
            </ul>
          </nav>

          <Separator className="bg-light-200/20 my-4" />

          <div className="flex flex-col justify-between gap-5 pb-5">
            <FileUploader
              ownerId={ownerId}
              accountId={accountId}
              className="w-full"
            />

            <form
              action={async () => {
                await signOutUser(params.locale as string);
              }}
            >
              <Button
                type="submit"
                className="mobile-sign-out-button"
                onClick={async () => await signOutUser(params.locale as string)}
              >
                <Image
                  src="/assets/icons/logout.svg"
                  alt="logo"
                  width={24}
                  height={24}
                />

                <p>{t("logout")}</p>
              </Button>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNavigation;
