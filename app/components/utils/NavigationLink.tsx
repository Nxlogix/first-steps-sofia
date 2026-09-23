"use client";

import { NavigationItem } from "@/app/types/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavigationLink({ href, label }: NavigationItem) {
  const pathname = usePathname();

  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  const className = `
    whitespace-nowrap
    rounded-md
    px-2
    py-1
    transition-colors
    ${isActive
      ? "bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-200"
      : "hover:text-cyan-600 dark:hover:text-cyan-400"}
  `;

  return (
    <Link href={href} className={className} aria-current={isActive ? "page" : undefined}>
      {label}
    </Link>
  );
}

export default NavigationLink;
