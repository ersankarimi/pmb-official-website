import Link from "next/link";

export const NavLink = ({ children, href = "/", onClick = () => {} }) => (
  <Link
    href={href}
    onClick={onClick}
    className="flex items-center rounded-sm p-1 text-2xl font-semibold text-inquares-blue-whale-500/70 outline-none transition-all duration-150 hover:text-inquares-blue-whale-500 focus:text-inquares-blue-whale-500 focus:ring-2 focus:ring-inquares-hippie-green-400 lg:text-base xl:text-lg"
  >
    {children}
  </Link>
);
