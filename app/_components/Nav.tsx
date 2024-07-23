import Link from "next/link";
import { usePathname } from "next/navigation";

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
    name: "Serviços",
  },
  {
    href: "/contact",
    name: "Contato",
  },
];

const Nav = () => {
  const pathName = usePathname();

  return (
    <nav>
      <div className="container mx-auto flex gap-8">
        {links.map((link, index) => {
          return (
            <Link
              className={`${pathName === link.href && "border-b-2 border-muted-foreground"} uppercase text-primary`}
              key={index}
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
