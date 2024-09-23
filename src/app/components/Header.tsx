"use client";
import React, { act, useState } from 'react'; { }
import { MenuItem, HoveredLink, Menu, ProductItem } from './Navbar-menu'
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
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
        <Menu setActive={setActive}>
          <Link href="/">
            <span className={twMerge(
              'text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 to-yellow-600 text-xl font-bold'
            )}>DishCovery</span>
          </Link>
          {/* <MenuItem setActive={setActive} active={active} item="DishCovery" className=""></MenuItem> */}
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/about/#recipe_search">Recipe Search</HoveredLink>
              <HoveredLink href="/about/#bookmarking_recipes">Bookmarking your recipes</HoveredLink>
              <HoveredLink href="/about/#cooking_tips">Cooking tips</HoveredLink>
              <HoveredLink href="/about/#nutrition_information">Nutrition information</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="  text-sm grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="#"
                src="/images/sample-img.jpg"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="#"
                src="/images/sample-img.jpg"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="#"
                src="/images/sample-img.jpg"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="#"
                src="/images/sample-img.jpg"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    ) : null)
}
