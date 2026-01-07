"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={twMerge(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <div
                className={twMerge(
                    "mx-auto max-w-7xl px-6 md:px-12 transition-all duration-300",
                    scrolled
                        ? "bg-opacity-10 backdrop-blur-md border border-white/10 rounded-full mx-4 shadow-lg bg-[#0A1929]"
                        : "bg-transparent"
                )}
            >
                <div className="flex items-center justify-between py-3">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                        Dinesh<span className="text-cyan-400">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector(item.href)?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-colors shadow-[0_0_15px_rgba(66,133,244,0.5)] hover:shadow-[0_0_25px_rgba(66,133,244,0.7)]"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-20 left-4 right-4 p-6 bg-[#0A1929]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl md:hidden flex flex-col gap-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-lg font-medium text-gray-300 hover:text-cyan-400"
                            onClick={(e) => {
                                setIsOpen(false);
                                e.preventDefault();
                                document.querySelector(item.href)?.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="px-5 py-2 text-center text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-colors"
                    >
                        Resume
                    </a>
                </div>
            )}
        </nav>
    );
}
