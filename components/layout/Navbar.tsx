"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skill" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const NAVBAR_OFFSET = 88;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    setIsOpen(false);

    const target = document.querySelector(href);
    if (!target) return;

    requestAnimationFrame(() => {
      const top =
        target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
      history.replaceState(null, "", href);
    });
  };

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Close the mobile menu if the screen is resized to desktop (lg = 1024px)
  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };
    desktopQuery.addEventListener("change", handleChange);
    return () => desktopQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4 lg:pt-8">
      <nav className="container-custom" aria-label="Main navigation">
        {/* ===== Desktop: centered pill with all links ===== */}
        <ul className="mx-auto hidden h-12 w-fit items-center gap-10 rounded-full bg-black/20 px-8 backdrop-blur-md lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="text-md text-white transition-colors hover:text-secondary-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ===== Mobile & tablet: pill that grows into a full-height panel ===== */}
        <div
          className={cn(
            "overflow-hidden bg-black/20 transition-[height,border-radius,backdrop-filter] duration-500 ease-out lg:hidden",
            isOpen
              ? "h-[calc(100svh-2rem)] rounded-2xl backdrop-blur-2xl"
              : "h-14 rounded-[28px] backdrop-blur-md",
          )}
        >
          {/* Top bar: logo + toggle button */}
          <div className="flex h-14 items-center justify-between px-5">
            <a
              href="#home"
              onClick={(event) => handleNavClick(event, "#home")}
              className="text-display-xs font-bold text-white"
            >
              Dimas
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="size-6 text-white" />
              ) : (
                <Image
                  src="/icons/hamburger.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              )}
            </button>
          </div>

          {/* Menu links (fade in one by one) */}
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                id="mobile-menu"
                className="mt-1 px-5"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.15 },
                  },
                }}
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, y: -8 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={(event) => handleNavClick(event, link.href)}
                      className="block py-2 text-md text-white"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}
