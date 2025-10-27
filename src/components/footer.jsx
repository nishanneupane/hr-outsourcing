'use client';

import { cn } from "@/lib/utils";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import Image from "next/image";

const FooterLink = ({ name, link }) => {
    return (
        <a
            href={link}
            className="tracking-[-0.06em] relative group overflow-hidden inline-block"
        >
            <span className="block duration-500 relative group-hover:-translate-y-12">
                {name}
            </span>
            <span className="absolute left-0 top-0 duration-500 translate-y-12 group-hover:translate-y-0">
                {name}
            </span>
        </a>
    );
};

const Footer = () => {
    return (
        <footer className="w-full border-t border-neutral-200 bg-white/90 backdrop-blur text-neutral-800">
            <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                {/* Logo + Tagline */}
                <div className="flex flex-col items-center sm:items-start gap-2">
                    <a href="#hero" className="relative flex size-16">
                        <Image
                            alt="Company logo"
                            fill
                            src="/images/logo.png"
                            className="object-contain"
                        />
                    </a>
                </div>

                {/* Links */}
                <div className="flex gap-6 text-sm">
                    <FooterLink name="About" link="/#about" />
                    <FooterLink name="Testimonials" link="/#testimonials" />
                    <FooterLink name="FAQ" link="/#faq" />
                    <FooterLink name="Contact" link="/#cta" />
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://www.facebook.com/profile.php?id=61580110176893"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 hover:text-blue-600 transition-colors duration-300"
                    >
                        <Facebook className="text-xl" />
                    </a>
                    <a
                        href="https://www.instagram.com/experthrofficial?igsh=bWtscXVxaG9zdWtr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 hover:text-pink-500 transition-colors duration-300"
                    >
                        <Instagram className="text-xl" />
                    </a>
                </div>
            </div>

            <p className="text-sm text-neutral-500 text-center pb-2">
                © {new Date().getFullYear()} Expert HR Outsourcing. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
