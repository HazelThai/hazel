'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className={`transition-colors hover:text-primary ${isActive ? "underline underline-offset-4" : ""
      }`}>
      {children}
    </Link>
  )
}
