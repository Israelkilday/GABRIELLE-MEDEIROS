"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";
import Socials from "./Socials";

interface MobileNavProps {
  // eslint-disable-next-line no-unused-vars
  setMobileNav: (value: boolean) => void;
}

const MobileNav = ({ setMobileNav }: MobileNavProps) => {
  const links = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/about",
      name: "Sobre",
    },
    {
      href: "/services",
      name: "Destaque",
    },
    {
      href: "/contact",
      name: "Contato",
    },
  ];

  const pathName = usePathname();

  const handleLinkClick = () => {
    setMobileNav(false);
  };

  return (
    <nav className="relative flex h-full flex-col justify-between p-8">
      <div
        className="cursor-pointer text-primary-foreground"
        onClick={() => setMobileNav(false)}
      >
        <IoCloseOutline className="text-4xl" />
      </div>

      <ul className="flex flex-col gap-10 text-xl text-primary">
        {links.map((link, index) => {
          return (
            <li
              key={index}
              className={`${pathName === link.href && "border-b-2 border-muted-foreground"} mx-auto max-w-max uppercase`}
            >
              <Link href={link.href} onClick={handleLinkClick}>
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <Socials containerStyles="text-white text-lg flex gap-6 justify-center" />
    </nav>
  );
};

export default MobileNav;
