"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "#" },
    { label: "Career", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "About", href: "#" },
  ];

  return (
    <nav className="sticky top-5 z-50 w-full px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-white/5 rounded-2xl sm:rounded-full p-2 shadow-lg shadow-black/20 border border-white/5 backdrop-blur-sm">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-[#6670FF]/10 via-transparent to-[#6670FF]/10 opacity-50 pointer-events-none" />

          <div className="relative flex items-center justify-between">
            {/* Left side: Logo and Brand */}
            <div className="flex items-center gap-4">
              <Link href="/" className="shrink-0 cursor-pointer">
                <Image
                  src="/devgent.svg"
                  alt="Devgent Logo"
                  width={147}
                  height={48}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Center: Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}

              {/* All Pages Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  All Pages
                  <svg
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isDropdownOpen && "rotate-180"
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsDropdownOpen(false)}
                    />
                    <div className="absolute top-full left-0 mt-2 w-48 bg-[#1a1b23] rounded-lg shadow-xl border border-white/10 py-2 z-20">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        Home
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        Services
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        Portfolio
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        Contact
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right side: Search and CTA Button */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Search Icon */}
              <button
                className="text-gray-300 hover:text-white transition-colors p-2"
                aria-label="Search"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-300 hover:text-white transition-colors p-2"
                aria-label="Menu"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
              <span className="text-white/10 sm:block hidden">|</span>
              {/* Get This Template Button */}
              <Button className="hidden sm:inline-flex bg-gradient-to-r cursor-pointer from-[#6670FF] to-[#8B5CF6] hover:from-[#5560E6] hover:to-[#7B4CE6] text-white font-medium px-4 sm:px-4 py-4 rounded-full shadow-lg shadow-[#6670FF]/30 transition-all text-sm sm:text-base">
                Sign In
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/10">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  className="flex items-center justify-between text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  All Pages
                  <svg
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isDropdownOpen && "rotate-180"
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="ml-4 space-y-2">
                    <a
                      href="#"
                      className="block text-sm text-gray-400 hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-gray-400 hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-gray-400 hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Portfolio
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-gray-400 hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </a>
                  </div>
                )}
                <Button
                  className="w-full bg-gradient-to-r from-[#6670FF] to-[#8B5CF6] hover:from-[#5560E6] hover:to-[#7B4CE6] text-white font-medium py-2 rounded-lg shadow-lg shadow-[#6670FF]/30 transition-all mt-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
