import React from "react";
import SideBar from "@/components/SideBar";
import MobileNavigation from "@/components/MobileNavigation";
import Header from "@/components/Header";
import { getCurrentUser } from "@/lib/actions/users.actions";
import { Toaster } from "@/components/ui/sonner";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) => {
  const currentUser = await getCurrentUser();
  const { locale } = await params;

  if (!currentUser) return redirect(`${locale}/sign-in`);

  return (
    <main className="flex h-screen">
      <SideBar {...currentUser} />
      <section className="flex h-full flex-1 flex-col">
        <MobileNavigation {...currentUser} />
        <Header userId={currentUser.$id} accountId={currentUser.accountId} />
        <div className="main-content">{children}</div>
      </section>

      <Toaster />
    </main>
  );
};

export default Layout;
