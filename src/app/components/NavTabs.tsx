"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SearchForm from "./SearchForm";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

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
    <div className="flex items-center justify-start md:justify-center lg:justify-between gap-4 rounded-md bg-opacity-50 backdrop-blur-lg border-b border-black dark:border-gray-300 p-6 text-black dark:text-white">
      <div className="flex flex-wrap items-center gap-4">
        {tabs.map((tab) => (
          <Tab text={tab} selected={selected === tab} setSelected={setSelected} key={tab} />
        ))}
      </div>
      <SearchForm className="w-1/3" />
    </div>
  );
}

const Tab = ({ text, selected, setSelected }: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={cn(
        "relative rounded-md p-2 text-sm md:text-lg transition-all",
        selected ? "text-white" : "text-white hover:font-black",
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
    </button>
  );
};
