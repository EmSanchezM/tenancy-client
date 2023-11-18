"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { Home } from "lucide-react";

export function MainNav() {
  const pathname = usePathname();

  const routes = [
    {
      href: '/',
      label: 'Overview',
      active: pathname === '/',
      icon: 'Home'
    },
    {
      href: '/customers',
      label: 'Clientes',
      active: pathname === '/customers',
      icon: 'Home'
    },
    {
      href: '/employees',
      label: 'Empleados',
      active: pathname === '/employees',
      icon: 'Home'
    },
    {
      href: '/categories',
      label: 'Categorias',
      active: pathname === '/categories',
      icon: 'Home'
    },
    {
      href: '/products',
      label: 'Products',
      active: pathname === '/products',
      icon: 'Home'
    },
    {
      href: '/orders',
      label: 'Orders',
      active: pathname === '/orders',
      icon: 'Home'
    },
    {
      href: '/settings',
      label: 'Settings',
      active: pathname === '/settings',
      icon: 'Home'
    },
  ]

  return (
    <nav>
      <ul className="flex flex-col gap-y-4">
        {routes.map((route) => (
          <li key={route.href}>
            <Link
              href={route.href}
              className={cn(
                'flex items-center gap-4 hover:text-gray-100 transition-colors',
                route.active ? 'text-black dark:text-white' : 'text-muted-foreground'
              )}
            >
              <Home className="text-2xl" />
              {route.label}
            </Link>
          </li>

        ))}
      </ul>
    </nav>
  )
};