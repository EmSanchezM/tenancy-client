"use client"

import { ReactNode, useState, createContext } from 'react';

type DashboardContextType = {
  showSidebar: boolean;
  toggleSidebar: () => void;
};

const defaultDashboardContext: DashboardContextType = {
  showSidebar: false,
  toggleSidebar: () => { },
};

export const SidebarContext = createContext<DashboardContextType>(defaultDashboardContext);

const SidebarProvider = ({
  children,
}: {
  children: ReactNode
}) => {

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar((prevState) => !prevState);

  const value: DashboardContextType = {
    showSidebar,
    toggleSidebar,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export default SidebarProvider