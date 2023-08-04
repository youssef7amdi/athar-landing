"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const path = usePathname();
  const links = [
    { href: "#", id: "home", name: "الرئيسية" },
    { href: "#offer", id: "offer", name: "العروض" },
    { href: "#services", id: "services", name: "خدماتنا" },
    { href: "#register", id: "register", name: "التسجيل" },
  ];
  return (
    <nav className="bg-white md:block hidden md:fixed md:top-0 md:left-0 z-50 w-full border-b-2 border-red-400 shadow-lg h-20">
      <div className="container m-auto flex justify-between items-center py-5 px-14">
        <div className="logo hover:drop-shadow-xl transition-all duration-300">
          <Image
            className="mr-4"
            src="/images/Athar Arabic Logo Red@900x.png"
            width={100}
            height={100}
            alt="Logo"
          ></Image>
          <Image
            src="/images/Athar English Logo Red_1@900x.png"
            width={70}
            height={70}
            alt="Logo"
          ></Image>
        </div>
        <ul className="list flex gap-6 font-bold">
          {links.map((l) => (
            <li
              key={l.id}
              className={`${
                l.href === path ? "text-red-600" : ""
              } navbar-link`}
            >
              <Link href={l.href}>{l.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
