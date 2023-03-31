import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  Separator,
} from "@/components";

export const AccordionNavLink = ({
  value = "",
  isOpen = false,
  triggerTextValue = "",
  accordionItemValue = "",
  accordionItems = "",
  onValueChange = () => {},
}) => (
  <Accordion
    type="single"
    collapsible
    open={isOpen}
    value={value}
    onValueChange={onValueChange}
  >
    <AccordionItem value={accordionItemValue}>
      <AccordionHeader>
        <AccordionTrigger asChild>
          <button
            type="button"
            className="group flex items-center rounded-sm p-1 text-2xl font-semibold text-inquares-blue-whale-500/70 outline-none outline-1 transition-all duration-200 hover:text-inquares-blue-whale-500 focus:text-inquares-blue-whale-500 focus:outline-inquares-hippie-green-300 focus:ring-2 focus:ring-inquares-hippie-green-400 lg:text-base xl:text-lg"
          >
            {triggerTextValue}
            <MdKeyboardArrowDown className="text-inquares-blue-whale-500/80 group-hover:text-inquares-blue-whale-500" />
          </button>
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent className="mt-2 flex-col gap-2 rounded-xl py-2 data-[state='open']:flex data-[state='closed']:hidden">
        {accordionItems.map(({ label, href }) => (
          <Link
            href={href}
            key={`accordion-navlink-${href}`}
            className="w-full rounded-sm px-3 py-2 font-medium text-inquares-blue-whale-500/80 outline-none transition-all duration-200 hover:bg-inquares-pizazz-200 hover:text-inquares-blue-whale-500 focus:bg-inquares-pizazz-200 focus:ring-2 focus:ring-inquares-pizazz-500/60 sm:rounded-none"
          >
            {label}
          </Link>
        ))}
        <Separator className="h-[1px] w-full bg-inquares-blue-whale-400/80" />
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
