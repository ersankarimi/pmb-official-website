import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components";

export const DropdownNavLink = ({
  triggerTextValue = "",
  dropdownItems = [],
}) => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="group flex items-center rounded-sm p-1 text-2xl font-semibold text-inquares-blue-whale-500/70 outline-none outline-1 transition-all duration-200 hover:text-inquares-blue-whale-500 focus:text-inquares-blue-whale-500 focus:outline-inquares-hippie-green-300 focus:ring-2 focus:ring-inquares-hippie-green-400 lg:text-base xl:text-lg"
        >
          {triggerTextValue}
          <MdKeyboardArrowDown className="text-inquares-blue-whale-500/80 duration-150 group-hover:text-inquares-blue-whale-500 group-data-[state='open']:-rotate-180" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="z-20 flex flex-col gap-1 border-b-2 border-b-inquares-blue-whale-200 bg-inquares-loafer-500 py-2 sm:w-48 sm:rounded-lg sm:shadow-lg"
        arrowFillClassName="fill-transparent"
      >
        {dropdownItems.map(({ label, href }) => (
          <DropdownMenuItem
            key={`dropdown-menu-item-${href}`}
            asChild
            className="rounded-md px-3 py-2 text-inquares-blue-whale-500/80 outline-none transition-all duration-200 hover:bg-inquares-pizazz-200 hover:text-inquares-blue-whale-700 focus:bg-inquares-pizazz-200 focus:ring-2 focus:ring-inquares-pizazz-500/60 sm:rounded-none"
          >
            <Link href={href}>{label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
