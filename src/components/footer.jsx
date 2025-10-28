'use client';

import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

const FooterLink = ({ name, link }) => (
    <a
        href={link}
        className="tracking-[-0.04em] relative group overflow-hidden inline-block"
    >
        <span className="block duration-500 relative group-hover:-translate-y-12">
            {name}
        </span>
        <span className="absolute left-0 top-0 duration-500 translate-y-12 group-hover:translate-y-0">
            {name}
        </span>
    </a>
);

const Footer = () => {
    return (
        <footer className="w-full border-t border-neutral-200 bg-white/90 backdrop-blur text-neutral-800">
            <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10">
                {/* Column 1: Logo & Info */}
                <div className="flex flex-col gap-4">
                    <a href="/" className="relative flex size-16">
                        <Image
                            alt="Expert HR logo"
                            fill
                            src="/images/logo.png"
                            className="object-contain"
                        />
                    </a>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                        Expert HR Outsourcing Pvt. Ltd
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                        <a
                            href="https://www.facebook.com/profile.php?id=61580110176893"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-600 hover:text-blue-600 transition-colors duration-300"
                        >
                            <Facebook size={18} />
                        </a>
                        <a
                            href="https://www.instagram.com/experthrofficial?igsh=bWtscXVxaG9zdWtr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-600 hover:text-pink-500 transition-colors duration-300"
                        >
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>

                {/* Column 2: Company */}
                <div>
                    <h4 className="font-semibold mb-3 text-neutral-900">Company</h4>
                    <ul className="flex flex-col gap-2 text-sm text-neutral-600">
                        <li><FooterLink name="About Us" link="/#about" /></li>
                        <li><FooterLink name="Leadership Team" link="/#team" /></li>
                        <li><FooterLink name="News & Press" link="/#news" /></li>
                        <li><FooterLink name="Careers" link="/#careers" /></li>
                    </ul>
                </div>

                {/* Column 3: Services */}
                <div>
                    <h4 className="font-semibold mb-3 text-neutral-900">Our Services</h4>
                    <ul className="flex flex-col gap-2 text-sm text-neutral-600">
                        <li><FooterLink name="Mortgage Broker Support Services" link="/message-broker" /></li>
                        <li><FooterLink name="Accounting and Bookkeeping" link="/accounting" /></li>
                        <li><FooterLink name="Administrative Support" link="/administrative" /></li>
                        <li><FooterLink name="Digital Marketing" link="/digital-marketing" /></li>
                        <li><FooterLink name="Web Development and Maintenance" link="/web-development" /></li>
                        <li><FooterLink name="IT Support and Marketing Assistance" link="/it-support" /></li>
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div>
                    <h4 className="font-semibold mb-3 text-neutral-900">Connect</h4>
                    <ul className="text-sm text-neutral-600 space-y-2">
                        <li>📞 +977 985-5050319</li>
                        <li>
                            ✉️{" "}
                            <a
                                href="mailto:info@experthroutsourcing.com"
                                className="hover:text-blue-600 transition-colors"
                            >
                                info@experthroutsourcing.com
                            </a>
                        </li>
                        <li>🏢 Expert HR Outsourcing Pvt. Ltd</li>
                        <li>
                            🌐{" "}
                            <a
                                href="https://www.google.com/maps/dir//6+Nagarjun,+Kathmandu+44600/@27.707533,85.1900759,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xa4d58a3f3d329d1f:0x440c283277e7a455!2m2!1d85.2724773!2d27.7075574?hl=en-NP&entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600 transition-colors"
                            >
                                View Location
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-neutral-200 mt-6 pt-4 text-center text-sm text-neutral-500">
                <p>
                    © {new Date().getFullYear()} Expert HR Outsourcing Pvt. Ltd
                </p>
            </div>
        </footer>
    );
};

export default Footer;
