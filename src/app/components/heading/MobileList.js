"use client";
import React, { useState } from "react";
import Link from "next/link";

const MobileList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const links = [
    { href: "#offer", id: "offer", name: "العروض" },
    { href: "#services", id: "services", name: "خدماتنا" },
    { href: "#register", id: "register", name: "التسجيل" },
  ];
  return (
    <div
      className={`cursor-pointer fixed w-full h-full md:hidden top-0 left-0 z-50 transition-all duration-500 ${
        isOpen
          ? "before:absolute before:w-full before:h-full before:top-0 before:left-0 before:transition-all before:duration-500 before:bg-black before:opacity-70"
          : ""
      }`}
      onClick={(e) => {
        if (
          !e.target.classList.contains("button") &&
          !e.target.classList.contains("link")
        )
          setIsOpen(false);
      }}
    >
      <button
        className={`button absolute bottom-8 right-8 text-white rounded-full border-2 w-[70px] h-[70px] text-sm font-bold bg-red-400 transition-all duration-300 hover:opacity-100 ${
          isOpen
            ? "bg-red-600 opacity-100 shadow-lg shadow-red-200"
            : "opacity-40"
        }`}
        onClick={handleClick}
      >
        القائمة
      </button>
      <ul
        className={`transition-all duration-300 ${isOpen ? "block" : "hidden"}`}
      >
        {links.map((l) => (
          <li key={l.id} className={`link link-${l.id}`}>
            <Link href={l.href} onClick={handleClick}>
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileList;
