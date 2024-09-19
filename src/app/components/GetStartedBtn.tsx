import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface IGetStartedButtonProps {
  text: string;
  className?: string;
}

export default function GetStartedButton({
  text = "Get Started",
  className,
}: IGetStartedButtonProps) {
  return (
    <div className="min-h-12 w-48 flex items-center justify-center bg-gradient-to-br from-green-950 to-blue-950 border border-green-900 rounded-lg flex items-center justify-center gap-1.5">
      <Link
        href="/recipes"
        className={cn(
          "group flex h-12 w-40 items-center justify-center gap-3 rounded-lg bg-transparent p-2 transition-colors duration-100 ease-in-out",
          className,
        )}
      >
        <span
          className={cn(
            "text-white transition-colors duration-100 ease-in-out group-hover:text-white",
          )}
        >
          {text}
        </span>
        <div
          className={cn(
            "relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full transition-transform duration-100",
            "bg-white group-hover:bg-transparent from-green-950 to-blue-950 border border-green-900",
          )}
        >
          <div className="absolute left-0 flex h-7 w-14 -translate-x-1/2 items-center justify-center transition-all duration-200 ease-in-out group-hover:translate-x-0">
            <ArrowRight
              size={16}
              className={cn(
                "size-7 transform p-1 text-white opacity-0 group-hover:opacity-100",
              )}
            />
            <ArrowRight
              size={16}
              className={cn(
                "size-7 transform p-1 text-black opacity-100 transition-transform duration-300 ease-in-out group-hover:opacity-0",
              )}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
