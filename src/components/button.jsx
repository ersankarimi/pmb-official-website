import cn from "classnames";

export const Button = ({
  children = "",
  variant = "default",
  type = "button",
  size = "md",
  fontWeight = "normal",
  fullWidth = false,
  disabled = false,
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      className={cn(
        "inline-flex items-center rounded-md shadow-sm outline-none transition-all duration-200 focus:ring-2  focus:ring-offset-2",
        {
          // size are sm, md, lg
          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",

          // variant are pizzaz, hippie-green, green-apple, loafer (default), and custom
          "bg-inquares-loafer-300/80 text-inquares-loafer-900 ring-inquares-loafer-400/80 hover:bg-inquares-loafer-300/90 active:bg-inquares-loafer-300":
            variant === "default",
          "bg-inquares-pizazz-300/80 text-inquares-pizazz-900 ring-inquares-pizazz-400/80  hover:bg-inquares-pizazz-300/90 active:bg-inquares-pizazz-300":
            variant === "pizzaz",
          "bg-inquares-hippie-green-300/80 text-inquares-hippie-green-900 ring-inquares-hippie-green-400/80 hover:bg-inquares-hippie-green-300/90 active:bg-inquares-hippie-green-300":
            variant === "hippie-green",
          "bg-inquares-green-apple-300/80 text-inquares-green-apple-900 ring-inquares-green-apple-400/80 hover:bg-inquares-green-apple-300/90 active:bg-inquares-green-apple-300":
            variant === "green-apple",

          // fullwidth
          "w-full": fullWidth,
          "w-max": !fullWidth,

          // disabled
          "cursor-not-allowed opacity-50": disabled,

          // font weight
          "font-medium": fontWeight === "medium",
          "font-semibold": fontWeight === "semibold",
          "font-bold": fontWeight === "bold",
        },
      )}
    >
      {children}
    </button>
  );
};
