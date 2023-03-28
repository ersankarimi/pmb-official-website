import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, DividerHorizontalIcon } from "@radix-ui/react-icons";
import React, { forwardRef } from "react";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuLabel = DropdownMenuPrimitive.Label;
export const DropdownMenuItem = DropdownMenuPrimitive.Item;
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;
export const DropdownMenuSeparator = DropdownMenuPrimitive.Separator;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

export const DropdownMenuContent = forwardRef(
  ({ children, arrowFillClassName, ...props }, forwardedRef) => (
    <DropdownMenuPrimitive.Content {...props} ref={forwardedRef}>
      {children}
      <DropdownMenuPrimitive.Arrow className={arrowFillClassName} />
    </DropdownMenuPrimitive.Content>
  ),
);

export const DropdownMenuCheckboxItem = forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <DropdownMenuPrimitive.CheckboxItem {...props} ref={forwardedRef}>
      {children}
      <DropdownMenuPrimitive.ItemIndicator>
        {props.checked === "indeterminate" && <DividerHorizontalIcon />}
        {props.checked === true && <CheckIcon />}
      </DropdownMenuPrimitive.ItemIndicator>
    </DropdownMenuPrimitive.CheckboxItem>
  ),
);

export const DropdownMenuRadioItem = forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <DropdownMenuPrimitive.RadioItem {...props} ref={forwardedRef}>
      {children}
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon />
      </DropdownMenuPrimitive.ItemIndicator>
    </DropdownMenuPrimitive.RadioItem>
  ),
);

DropdownMenuContent.displayName = "DropdownMenuContent";
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";
