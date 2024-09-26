"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export default function NavTabs({ tabs }: { tabs: string[] }) {
  const [selected, setSelected] = useState<string>(tabs[0]);
  const path = usePathname()

  useEffect(() => {
    if (path) {
      const capitalizedPath = path.charAt(1).toUpperCase() + path.slice(2);
      setSelected(capitalizedPath);
    }
  }, [path]);

  return (
    <div className="flex items-center justify-start md:justify-center lg:justify-between gap-4 rounded-md bg-opacity-50 backdrop-blur-lg border-b border-black dark:border-gray-300 p-6 text-dark dark:text-white">
      <div className="flex flex-wrap items-center gap-4">
        <Link href={'/'} className={cn(
          "relative rounded-md p-2 text-sm md:text-md lg:text-lg transition-all text-dark dark:text-white hover:font-black",
        )}>DishCovery</Link>
        {tabs.map((tab) => (
          <Tab text={tab} selected={selected === tab} setSelected={setSelected} key={tab} />
        ))}
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
          className="absolute inset-0 rounded-sm bg-lime-600"
        />
      )}
    </Link>
  );
};
