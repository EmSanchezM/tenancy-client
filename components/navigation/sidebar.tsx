'use client';

import { useContext } from 'react';
import { X as CloseIcon } from 'lucide-react';

import { SidebarContext } from '@/providers/sidebar-provider';
import { MainNav } from './main-nav';

const Sidebar = () => {
  const { showSidebar, toggleSidebar } = useContext(SidebarContext)

  return (
    <div
      className={`bg-[#0A0A0A]/90 dark:bg-zinc-200 fixed top-0 w-64 h-full p-6 flex flex-col justify-between ${showSidebar ? "left-0" : "-left-full"
        } md:left-0 transition-all duration-300 z-50`}
    >
      <div className="md:hidden absolute right-4 top-4 ">
        <button
          className="text-2xl p-2 box-content"
          onClick={toggleSidebar}
        >
          <CloseIcon />
        </button>
      </div>
      <div>
        <div className="mb-8 text-white">
          LOGO
        </div>
        <MainNav />
      </div>
    </div>
  )
}

export default Sidebar
