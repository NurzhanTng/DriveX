"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Search from "@/components/Search";
import FileUploader from "@/components/FileUploader";
import { signOutUser } from "@/lib/actions/users.actions";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useParams } from "next/navigation";

const Header = ({
  userId,
  accountId,
}: {
  userId: string;
  accountId: string;
}) => {
  const params = useParams();

  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader ownerId={userId} accountId={accountId} />

        <LocaleSwitcher />

        <form
          action={async () => {
            await signOutUser(params.locale as string);
          }}
        >
          <Button
            type="submit"
            className="sign-out-button"
            onClick={async () => await signOutUser(params.locale as string)}
          >
            <Image
              src="/assets/icons/logout.svg"
              alt="logo"
              width={24}
              height={24}
              className="w-6"
            />
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
