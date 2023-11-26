'use client';

import { useContext } from "react";
import { useSession } from "next-auth/react";
import { AlignJustify } from "lucide-react";

import { ThemeToggle } from "./theme-toggle";
import { UserNav } from "./user-nav";
import { SidebarContext } from "@/providers/sidebar-provider";
import { redirect } from "next/navigation";

const Header = () => {
  const { toggleSidebar } = useContext(SidebarContext)
  const { data: session } = useSession();

  if (session === null) redirect('/auth/sign-in')

  return (
    <header className="fixed left-0 top-0 md:ml-64 w-full md:w-[calc(100%-256px)] bg-[#0A0A0A]/90 dark:bg-zinc-200 flex items-center justify-between p-4 z-40">
      <div>
        <AlignJustify onClick={toggleSidebar} className="text-2xl hover:cursor-pointer p-2 box-content md:hidden" />
      </div>
      <div className="flex items-center gap-6">
        <ThemeToggle />
        <UserNav user={session?.user} />
      </div>
    </header>
  );
};

export default Header;