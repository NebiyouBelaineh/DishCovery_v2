"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes';

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export default function NavTabs({ tabs }: { tabs: string[] }) {
  const [selected, setSelected] = useState<string>(tabs[0]);
  const [mounted, setMounted] = useState(false);
  const path = usePathname()
  const { theme, setTheme } = useTheme()



  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (path) {
      const capitalizedPath = path.charAt(1).toUpperCase() + path.slice(2);
      setSelected(capitalizedPath);
    }
  }, [path]);

  return (
    <div className="flex items-center justify-center rounded-md bg-opacity-50 backdrop-blur-lg border-b-2 border-black dark:border-gray-300 p-6 text-dark dark:text-white">
      <div className="flex flex-wrap items-center gap-2 shadow-sm shadow-stone-300 dark:shadow-stone-600 bg-lime-200 dark:bg-lime-950 rounded-full py-4 md:gap-6">
        <Link href={'/'} className={cn(
          "relative rounded-md p-2 text-sm md:text-md lg:text-lg transition-all text-dark dark:text-white hover:font-black",
        )}>DishCovery
        </Link>
        {tabs.map((tab) => (
          <Tab text={tab} selected={selected === tab} setSelected={setSelected} key={tab} />
        ))}
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="p-2 rounded-md hover:bg-lime-700 dark:hover:bg-lime-600 transition-colors hover:scale-110 hover:text-white dark:hover:text-dark"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )
          )}
        </button>
      </div>
    </div>
  );
}

const Tab = ({ text, selected, setSelected }: TabProps) => {
  return (
    <Link
      href={`/${text.toLowerCase()}`}
      onClick={() => setSelected(text)}
      className={cn(
        "relative text-center rounded-md p-2 text-sm md:text-md lg:text-lg transition-all",
        selected ? "text-white" : "text-dark dark:text-white hover:font-black",
      )}
    >
      <p className="relative z-50 min-w-20">{text}</p>
      {selected && (
        <motion.span
          layoutId="tabs"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 rounded-full bg-lime-600"
        />
      )}
    </Link>
  );
};
