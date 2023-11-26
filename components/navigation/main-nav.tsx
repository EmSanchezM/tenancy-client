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
      icon: <Home className="text-2xl" />
    },
    {
      href: '/customers',
      label: 'Clientes',
      active: pathname === '/customers',
      icon: <Home className="text-2xl" />
    },
    {
      href: '/employees',
      label: 'Empleados',
      active: pathname === '/employees',
      icon: <Home className="text-2xl" />
    },
    {
      href: '/suppliers',
      label: 'Proveedores',
      active: pathname === '/suppliers',
      icon: <Home className="text-2xl" />
    },
    {
      href: '/categories',
      label: 'Categorias',
      active: pathname === '/categories',
      icon: <Home className="text-2xl" />
    },
    {
      href: '/products',
      label: 'Products',
      active: pathname === '/products',
      icon: <Home className="text-2xl" />
    },
    {
      href: '/orders',
      label: 'Orders',
      active: pathname === '/orders',
      icon: <Home className="text-2xl" />
    },
    {
      href: '/settings',
      label: 'Settings',
      active: pathname === '/settings',
      icon: <Home className="text-2xl" />
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
                route.active ? 'text-white' : 'text-muted-foreground'
              )}
            >
              {route.icon}
              {route.label}
            </Link>
          </li>

        ))}
      </ul>
    </nav>
  )
};