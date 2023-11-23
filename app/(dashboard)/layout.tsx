'use client';

import { useSession } from "next-auth/react";

import Header from "@/components/navigation/header";
import Sidebar from "@/components/navigation/sidebar";
import SidebarProvider from "@/providers/sidebar-provider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { status } = useSession();

  if (status === 'loading') return <div>Loading...</div>

  return (
    <div className="min-h-screen">
      <SidebarProvider>
        <Header />
        <Sidebar />
      </SidebarProvider>
      {children}
    </div>
  );
};