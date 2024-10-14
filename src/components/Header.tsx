"use client";
import React, { useState, useRef, useEffect } from "react";
import logo from "@/app/assets/images/omnilogo.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X,Phone } from "lucide-react"; 
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  
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
      <nav className="hidden lg:flex items-center justify-between px-8 py-4">
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
              <Link href={"/"} className="font-bold">
                About Us
              </Link>
            </div>
            <div>
              <Link href={"/"} className="font-bold">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <div>
            <Button variant="outline">
              <div className="flex space-x-2">
                <div>
                  <Phone size={20} />
                </div>
                <div>
                  +628123456789
                </div>
              </div>
            </Button>
          </div>
          <div>
            <Button className="bg-lime-400 font-bold hover:bg-lime-950">JOIN US</Button>
          </div>
        </div>
      </nav>

      <nav className="lg:hidden flex px-4 py-2 justify-between items-center">
        <Link href={"/"}>
          <Image src={logo} alt="omni global" height={40} priority={true} />
        </Link>

        <button onClick={toggleMenu}>{isMenuOpen ? <X /> : <Menu />}</button>
      </nav>

      <div
        ref={menuRef} // Menggunakan ref pada menu
        className={` z-40 lg:hidden fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transition-transform transform ${
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
            <Button variant="outline" onClick={toggleMenu}>
              Hubungi Kami
            </Button>
          </div>
          <div>
            <Button onClick={toggleMenu}>Bergabung Dengan Kami?</Button>
          </div>
        </div>
      </div>
    </>
  );
}
