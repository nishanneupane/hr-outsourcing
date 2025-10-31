'use client';

import { useModal } from "@/context/modalContext";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion } from 'framer-motion'

const Navlink = ({ name, link, className = "" }) => {
    return (
        <a href={link} className={cn("tracking-[-0.06em] relative group overflow-hidden inline-block", className)}>
            <span className="block duration-500 relative group-hover:-translate-y-12">
                {name}
            </span>
            <span className="absolute left-0 top-0 duration-500 translate-y-12 group-hover:translate-y-0">
                {name}
            </span>
        </a>
    )
}

const Header = () => {
    const { setIsModalOpen } = useModal();
    const [handling, setHandling] = useState(false);
    const [nav, setnav] = useState(false);
    const [servicesDropdown, setServicesDropdown] = useState(false);
    const servicesCloseTimerRef = useRef(null);

    // Dropdown state & timer ref
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const closeTimerRef = useRef(null);
    const CLOSE_DELAY = 120; // ms - short but forgiving

    // Helpers to manage delayed close so small gaps won't close menu
    const scheduleClose = () => {
        if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = window.setTimeout(() => {
            setDropdownOpen(false);
            closeTimerRef.current = null;
        }, CLOSE_DELAY);
    };
    const cancelClose = () => {
        if (closeTimerRef.current) {
            window.clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
    };

    useEffect(() => {
        return () => {
            if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
        };
    }, []);

    const handleMobileNavLinkClick = () => {
        setTimeout(() => {
            setnav(false);
        }, 200);
    };

    const handleMobileNavConnectClick = () => {
        setTimeout(() => {
            setnav(false);
            setTimeout(() => {
                setIsModalOpen(true);
            }, 200);
        }, 200);
    };

    const handleConnectClick = () => {
        setHandling(true);
        setTimeout(() => {
            setIsModalOpen(true);
            setHandling(false);
        }, 750);
    };



    const scheduleCloseServices = () => {
        if (servicesCloseTimerRef.current) window.clearTimeout(servicesCloseTimerRef.current);
        servicesCloseTimerRef.current = window.setTimeout(() => {
            setServicesDropdown(false);
            servicesCloseTimerRef.current = null;
        }, 120);
    };

    const cancelCloseServices = () => {
        if (servicesCloseTimerRef.current) {
            window.clearTimeout(servicesCloseTimerRef.current);
            servicesCloseTimerRef.current = null;
        }
    };


    return (
        <div className="fixed flex w-full top-0 h-[48px] items-center justify-between px-4 bg-white/90 backdrop-blur z-50 border-b-primary border-b">
            {/* Logo */}
            <a href="/#hero" className="relative flex size-16">
                <Image alt="Expert HR Outsourcing logo" fill src="/images/logo.png" />
            </a>

            {/* Fullscreen navbar */}
            <div className="sm:flex hidden gap-4 items-center justify-center">
                <Navlink name="Home" link="/#" />

                {/* Who We Are dropdown: replace the old broken one with this */}
                <div
                    className="relative"
                    onMouseEnter={() => { cancelClose(); setDropdownOpen(true); }}
                    onMouseLeave={() => { scheduleClose(); }}
                >
                    <button
                        onClick={() => setDropdownOpen((s) => !s)}
                        className="flex items-center gap-1 text-sm font-medium text-neutral-800 hover:text-primary transition-colors"
                        aria-expanded={dropdownOpen}
                        aria-haspopup="menu"
                    >
                        Who We Are
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    { /* only render the dropdown when open for better focus handling */}
                    {dropdownOpen && (
                        <div
                            role="menu"
                            className="absolute left-0 top-full mt-3 flex flex-col w-48 bg-white rounded-xl border border-neutral-200 shadow-lg overflow-hidden z-50"
                            onMouseEnter={() => cancelClose()}
                            onMouseLeave={() => scheduleClose()}
                        >
                            <a
                                href="/#about"
                                className="px-4 py-2 text-sm text-neutral-700 hover:bg-primary/10 hover:text-primary transition-colors"
                                onClick={() => { /* close quickly on click for UX */ setDropdownOpen(false); }}
                            >
                                About us
                            </a>
                            <a
                                href="/our-purpose"
                                className="px-4 py-2 text-sm text-neutral-700 hover:bg-primary/10 hover:text-primary transition-colors"
                                onClick={() => { setDropdownOpen(false); }}
                            >
                                Our Purpose
                            </a>
                        </div>
                    )}
                </div>

                {/* Our Services dropdown */}
                <div
                    className="relative"
                    onMouseEnter={() => { cancelClose(); setServicesDropdown(true); }}
                    onMouseLeave={() => { scheduleCloseServices(); }}
                >
                    <button
                        onClick={() => setServicesDropdown((s) => !s)}
                        className="flex items-center gap-1 text-sm font-medium text-neutral-800 hover:text-primary transition-colors"
                        aria-expanded={servicesDropdown}
                        aria-haspopup="menu"
                    >
                        Our Services
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? "rotate-180" : ""}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {servicesDropdown && (
                        <div
                            className="absolute left-0 top-full mt-3 flex flex-col w-60 bg-white rounded-xl border border-neutral-200 shadow-lg overflow-hidden z-50"
                            onMouseEnter={() => cancelCloseServices()}
                            onMouseLeave={() => scheduleCloseServices()}
                        >
                            <a href="/message-broker" className="px-4 py-2 text-sm text-neutral-700 hover:bg-primary/10 hover:text-primary transition-colors">Mortgage Broker Support Services</a>
                            <a href="/accounting" className="px-4 py-2 text-sm text-neutral-700 hover:bg-primary/10 hover:text-primary transition-colors">Accounting and Bookkeeping</a>
                            <a href="/administrative" className="px-4 py-2 text-sm text-neutral-700 hover:bg-primary/10 hover:text-primary transition-colors">Administrative Support</a>
                            <a href="/digital-marketing" className="px-4 py-2 text-sm text-neutral-700 hover:bg-primary/10 hover:text-primary transition-colors">Digital Marketing</a>
                            <a href="/web-development" className="px-4 py-2 text-sm text-neutral-700 hover:bg-primary/10 hover:text-primary transition-colors">Web Development and Maintenance</a>
                            <a href="/it-support" className="px-4 py-2 text-sm text-neutral-700 hover:bg-primary/10 hover:text-primary transition-colors">IT Support and Marketing Assistance</a>
                        </div>
                    )}
                </div>


                <Navlink name="Testimonials" link="/#testimonials" />
                <Navlink name="FAQ" link="/#faq" />
                <a
                    onClick={handleConnectClick}
                    className="px-2 relative py-1 flex items-center justify-center tracking-[-0.06em] bg-primary rounded-md hover:opacity-80 duration-300 text-white overflow-hidden group"
                    href="#cta"
                >
                    {handling && <Loader className="animate-spin absolute" size={20} />}
                    <span className={`block relative group-hover:-translate-y-12 ${handling ? "invisible" : ""}`} style={{ transition: "transform 0.5s" }}>
                        Connect
                    </span>
                    <span style={{ transition: "transform 0.5s" }} className={`absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-12 group-hover:translate-y-[-50%] ${handling ? "invisible" : ""}`}>
                        Connect
                    </span>
                </a>
            </div>

            {/* Mobile navbar */}
            <div className="sm:hidden flex items-center justify-center gap-4">
                <a onClick={handleConnectClick} className="px-2 py-1 flex items-center justify-center tracking-[-0.06em] bg-primary rounded-md hover:opacity-80 duration-300 text-white" href="#cta">
                    {handling && <Loader className="animate-spin absolute" size={20} />}
                    <span className={cn(handling && 'invisible')}>Connect</span>
                </a>
                <motion.button
                    onClick={() => setnav(!nav)}
                    className={cn('z-[100] relative size-10 duration-300', nav && 'px-4 py-2 hover:bg-neutral-600/50 rounded-full')}
                    animate={nav ? "open" : "close"}
                >
                    <motion.span
                        style={{ left: '50%', top: '40%', x: '-50%', y: '-50%' }}
                        className={cn('absolute h-[1.5px] w-6')}
                        variants={{ open: { rotate: "45deg", top: '50%', background: 'white', }, close: { rotate: "0deg", background: 'black', } }}
                    />
                    <motion.span
                        style={{ left: '50%', top: '60%', x: '-50%', y: '-50%', }}
                        className={cn('absolute h-[1.5px] w-6')}
                        variants={{ open: { rotate: "-45deg", top: '50%', background: 'white', }, close: { rotate: "0deg", background: 'black', } }}

                    />
                </motion.button>
                <motion.div
                    initial="close"
                    variants={{ open: { visibility: 'visible', height: '100vh' }, close: { visibility: 'hidden', height: 0 } }}
                    transition={{ duration: 1, ease: [0.860, 0.000, 0.070, 1.000], bounce: 0.3, }}
                    animate={nav ? "open" : "close"}
                    className='fixed w-full inset-0 z-[50] hero px-4 backdrop-blur-lg flex items-center justify-center'
                >
                    <motion.div
                        variants={{ open: { visibility: 'visible', opacity: 1 }, close: { visibility: 'hidden', opacity: 0 } }}
                        transition={{ duration: 1.5 }}
                        initial="close"
                        animate={nav ? "open" : "close"}
                        className='flex flex-col items-center container gap-4 divide-y w-full divide-neutral-400'
                    >
                        <a onClick={() => handleMobileNavLinkClick()} href='#about' className='text-neutral-100 tracking-[-0.06em] cursor-pointer w-full text-center flex items-center justify-center text-4xl'>About</a>
                        <a onClick={() => handleMobileNavLinkClick()} href="#testimonials" className='text-neutral-100 tracking-[-0.06em] pt-4 cursor-pointer w-full text-center flex items-center justify-center text-4xl'>
                            Testimonials
                        </a>
                        <a onClick={() => handleMobileNavLinkClick()} href='#faq' className='text-neutral-100 tracking-[-0.06em] pt-4 cursor-pointer w-full text-center flex items-center justify-center text-4xl'>FAQ</a>
                        <a onClick={() => handleMobileNavConnectClick()} href='#cta' className='text-neutral-100 tracking-[-0.06em] pt-4 cursor-pointer w-full text-center flex items-center justify-center text-4xl'>Connect with us!</a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Header;
