'use client';

import { cn } from "@/lib/utils";
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
            <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-4">
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
            </div>
            <p className="text-sm text-neutral-500 text-center pb-2">
                © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>


        </footer>
    );
};

export default Footer;
