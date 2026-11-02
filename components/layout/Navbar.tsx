"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <nav className="container-custom">
        <div className="flex h-14 items-center justify-between rounded-full bg-black/20 px-5 backdrop-blur-md">
          {/* Logo */}
          <Link href="/" className="text-display-xs font-bold text-white">
            Dimas
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="md:hidden"
          >
            <Image src="/icons/hamburger.svg" alt="" width={24} height={24} />
          </button>
        </div>
      </nav>
    </header>
  );
}
