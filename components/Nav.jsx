"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "projects", path: "/projects" },
  { name: "skills", path: "/skills" },
  { name: "about", path: "/about" },
  { name: "contact", path: "/contact" },
];
const Nav = () => {
  // track current path
  const pathname = usePathname();
  return (
    <>
      <nav className="flex gap-8">
        {links.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              // conditionally render style for current path
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } capatalize font-medium hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Nav;
