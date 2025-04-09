"use client";

import React from "react";
import { Link, usePathname } from "@/navigation";
import Image from "next/image";
import { getNavItems } from "@/constants";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";

interface Props {
  fullName: string;
  avatar: string;
  email: string;
}

const SideBar = ({ fullName, avatar, email }: Props) => {
  const params = useParams();
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Link href="/">
        <Image
          src="/assets/icons/logo-full-brand.svg"
          alt="logo"
          width={160}
          height={50}
          className="hidden h-auto lg:block"
        />

        <Image
          src="/assets/icons/logo-brand.svg"
          alt="logo"
          width={52}
          height={52}
          className="lg:hidden"
        />
      </Link>

      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {getNavItems(params.locale as string).map(({ url, name, icon }) => (
            <Link key={name} href={url} className="lg:w-full">
              <li
                className={cn(
                  "sidebar-nav-item",
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

                <p className="hidden lg:block">{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      {/* <Image */}
      {/*  src="/assets/images/files-2.png" */}
      {/*  alt="logo" */}
      {/*  height={506} */}
      {/*  width={418} */}
      {/*  className="w-full" */}
      {/* /> */}

      <div className="sidebar-user-info">
        <Image
          src={avatar}
          alt="avatar"
          width={44}
          height={44}
          className="sidebar-user-avatar"
        />

        <div className="hidden lg:block">
          <p className="subtitle-2 capitalize">{fullName}</p>
          <p className="caption">{email}</p>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
