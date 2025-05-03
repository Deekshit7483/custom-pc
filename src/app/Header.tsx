"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between relative">
        
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-700 cursor-pointer">PC Builder</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <Link href="/">Home</Link>
          <Link href="#">Wishlist</Link>
          <Link href="/build">Build Your PC</Link>
          <Link href="#">Contact</Link>
        </nav>

        {/* Profile Image (Desktop Only) */}
        <div className="hidden md:block">
          <Image
            src="/profile.png"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full object-cover border border-blue-600"
          />
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Nav (below header) */}
      {menuOpen && (
        <nav className="flex flex-col space-y-3 mt-2 px-4 md:hidden bg-grey text-gray-700 shadow-md">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="#" onClick={() => setMenuOpen(false)}>Wishlist</Link>
          <Link href="/build" onClick={() => setMenuOpen(false)}>Build Your PC</Link>
          <Link href="#" onClick={() => setMenuOpen(false)}>Contact</Link>

          {/* Profile for mobile */}
          <div className="mt-2">
            <img
              src="/profile.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full object-cover border border-blue-600"
            />
          </div>
        </nav>
      )}
    </header>
  );
}
