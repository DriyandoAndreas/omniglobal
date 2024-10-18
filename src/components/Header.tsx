"use client";
import React, { useState, useRef, useEffect } from "react";
import logo from "@/app/assets/images/omnilogo.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { setTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center justify-between px-8 py-4 top-0 sticky z-40 bg-white dark:bg-black border-b-4 border-lime-400">
        <div className="flex p-2 space-x-4">
          <Link href={"/"}>
            <Image src={logo} alt="omni global" height={75} priority={true} />
          </Link>
          <div className="flex space-x-4 items-center">
            <div>
              <Link href={"/"} className="font-bold">
                Home
              </Link>
            </div>
            <div>
              <Link href={"/about"} className="font-bold">
                About Us
              </Link>
            </div>
            <div>
              <Link href={"/contact"} className="font-bold">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div>
            <Link href={"https://wa.link/yd2xa9"}>
              <Button variant="outline">
                <div className="flex space-x-2">
                  <div>
                    <Phone size={20} />
                  </div>
                  <div>+6282-138-830-051</div>
                </div>
              </Button>
            </Link>
          </div>
          <div>
            <Button className="bg-sky-600 font-bold hover:bg-sky-800 dark:hover:bg-sky-500 dark:text-white">
              JOIN US
            </Button>
          </div>
        </div>
      </nav>

      <nav className="lg:hidden flex px-4 py-2 justify-between items-center border-b-4 border-lime-400">
        <Link href={"/"}>
          <Image src={logo} alt="omni global" height={40} priority={true} />
        </Link>

        <button onClick={toggleMenu}>{isMenuOpen ? <X /> : <Menu />}</button>
      </nav>

      <div
        ref={menuRef}
        className={` z-40 lg:hidden fixed top-0 right-0 h-full w-3/4 bg-white dark:bg-black shadow-lg transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          <Link href={"/"} className="font-bold" onClick={toggleMenu}>
            Home
          </Link>
          <Link href={"/about"} className="font-bold" onClick={toggleMenu}>
            About Us
          </Link>
          <Link href={"/contact"} className="font-bold" onClick={toggleMenu}>
            Contact Us
          </Link>
          <div>
            <Link href={"https://wa.link/yd2xa9"}>
              <Button variant="outline">
                <div className="flex space-x-2">
                  <div>
                    <Phone size={20} />
                  </div>
                  <div>+6282-138-830-051</div>
                </div>
              </Button>
            </Link>
          </div>
          <div>
            <Link href={"https://wa.link/yd2xa9"}>
              <Button className="bg-sky-600 font-bold hover:bg-sky-800 dark:hover:bg-sky-500 dark:text-white">
                JOIN US
              </Button>
            </Link>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
}
