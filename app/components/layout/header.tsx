"use client";

import Link from "next/link";
import NavigationLink from "@/app/components/utils/NavigationLink";
import { navigationItems } from "@/app/data/navigation-items";

function Header() {
  return (
    <header className="flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-4 border-b border-zinc-200 pb-5 dark:border-zinc-800">
      {/* Logo */}
      <Link
        href="/"
        className="group flex items-center gap-2 text-lg font-semibold tracking-tight text-zinc-900 dark:text-white"
        aria-label="UTVT, inicio"
      >
        <svg
          className="h-10 w-10 transition-transform duration-200 group-hover:scale-105"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="UTVT"
        >
          <path d="M8 13H18L23 39L28 13H37L30 50H17L8 13Z" fill="#00843D" />
          <path d="M26 13H37L42 37L47 13H57L49 50H36L32 31L28 50H18L26 13Z" fill="#005A32" />
          <path d="M18 8H47" stroke="#00843D" strokeWidth="5" strokeLinecap="square" />
        </svg>
        <span>UTVT</span>
      </Link>

      {/* Navegación principal */}
      <nav aria-label="Navegación principal" className="order-3 w-full sm:order-0 sm:w-auto">
        <ul className="flex items-center gap-5 overflow-x-auto text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <NavigationLink {...item} />
            </li>
          ))}
          <li>
            <a
              className="whitespace-nowrap transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
              href="https://nextjs.org/docs/app/getting-started/project-structure"
            >
              Next.js
            </a>
          </li>
        </ul>
      </nav>

      {/* Enlace a GitHub */}
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/vercel/next.js/"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
          aria-label="Repositorio de GitHub"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.578 2 12.23c0 4.522 2.865 8.352 6.839 9.707..."
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Header;
