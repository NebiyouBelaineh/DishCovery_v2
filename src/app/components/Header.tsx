"use client";
import NavTabs from './NavTabs'
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function Header({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    pathname !== '/' ? (
      <div
        className={cn("fixed inset-x-0 z-50 shadow-lg", className)}
      >
        <NavTabs tabs={['Recipes', 'About']} />
      </div>
    ) : null)
}
