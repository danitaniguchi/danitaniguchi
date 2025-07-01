'use client'

import Image from "next/image";
import { useState, useEffect } from 'react';

const Header = () => {
    const [isFixed, setIsFixed] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
        const currentScrollY = window.scrollY;

        const isScrollingUp = currentScrollY < lastScrollY;
        const isAtTop = currentScrollY < 82;

        if (isScrollingUp || isAtTop) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }

        setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleMenu = () => {
        setMobileMenuOpened(mobileMenuOpened === false);
    }

    return (
        <header tabIndex={-1} id="header" className={`transition-[top] duration-500 w-full z-2 shadow-sm ${
            isFixed
            ? 'sticky top-0 bg-white'
            : 'relative top-[-82px] bg-transparent shadow-none'
        }`}>
            <div className="py-4 px-8 gap-8 max-w-7xl gap-y-4 m-auto flex flex-wrap justify-between md:items-center">
                <Image
                    aria-hidden
                    src="/dt-large-solid.png"
                    alt="Dani Taniguchi"
                    width={50}
                    height={50}
                />
                <button className="md:hidden" type="button" onClick={handleMenu}>
                    <Image
                        src={mobileMenuOpened ? "/close.png" : "/menu.png"}
                        alt={mobileMenuOpened ? "Close mobile Menu" : "Open mobile menu"}
                        width={32}
                        height={32}
                    />
                </button>
                <nav role="navigation" aria-label="Site map" className={`md:flex ${mobileMenuOpened ? "" : "hidden"}`}>
                    <ul className={`w-[calc(100vw-79px)] md:w-full row-start-3 flex gap-2 md:gap-8 md:flex-row flex-wrap justify-start ${mobileMenuOpened ? "flex-col" : ""}`}>
                        <li>
                            <a 
                                className="flex py-2 md:py-0 items-center gap-2 hover:underline hover:underline-offset-4 outline-offset-4"
                                href="#about"
                            >
                            About
                            </a>
                        </li>
                        <li>
                            <a
                                className="flex py-2 md:py-0 items-center gap-2 hover:underline hover:underline-offset-4 outline-offset-4"
                                href="#skills"
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                className="flex py-2 md:py-0 items-center gap-2 hover:underline hover:underline-offset-4 outline-offset-4"
                                href="#projects"
                            >
                            Projects
                            </a>
                        </li>
                        <li>
                        <a
                                className="flex py-2 md:py-0 items-center gap-2 hover:underline hover:underline-offset-4 outline-offset-4"
                                href="#certifications"
                            >
                                Certifications
                            </a>
                        </li>
                        <li>
                            <a
                                className="flex py-2 md:py-0 items-center gap-2 hover:underline hover:underline-offset-4 outline-offset-4"
                                href="#contact"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;