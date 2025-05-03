"use client";

import Link from "next/link";
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow p-4 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-700 cursor-pointer">PC Builder</h1>
        </Link>
        
        {/* Navigation Links */}
        <nav className="space-x-4 flex items-center">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600">Wishlist</Link>
          <Link href="/build" className="text-gray-700 hover:text-blue-600">Build Your PC</Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </nav>
      </div>

      {/* Profile Image in the top-right corner */}
      <div className="absolute top-3 right-4">
        <Image
          src="profile.png"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border-1 border-blue-600"
        />
      </div>
    </header>
  );
}
