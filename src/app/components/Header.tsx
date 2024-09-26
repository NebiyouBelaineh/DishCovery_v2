"use client";
import React, { act, useState } from 'react'; { }
import { MenuItem, HoveredLink, Menu, ProductItem } from './Navbar-menu'
import NavTabs from './NavTabs'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { usePathname } from 'next/navigation';

export default function Header({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();
  return (
    pathname !== '/' ? (
      <div
        className={cn("fixed inset-x-0 z-50 shadow-lg rounded-full", className)}
      >
        <NavTabs tabs={['Recipes', 'About']} />
      </div>
    ) : null)
}
