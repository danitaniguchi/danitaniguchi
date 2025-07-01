'use client'

import Image from "next/image";
import { useState, useEffect } from 'react';

const Header = () => {
    const [isFixed, setIsFixed] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    
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

    return (
        <header tabIndex={-1} id="header" className={`transition-[top] duration-500 w-full z-2 shadow-sm ${
            isFixed
            ? 'sticky top-0 bg-white'
            : 'relative top-[-82px] bg-transparent shadow-none'
        }`}>
            <div className="p-4 max-w-7xl gap-y-4 m-auto flex flex-col md:flex-row justify-between items-center">
                <Image
                    aria-hidden
                    src="/dt-large-solid.png"
                    alt="Dani Taniguchi"
                    width={50}
                    height={50}
                />
                <nav role="navigation" aria-label="Site map">
                    <ul className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                        <li>
                            <a 
                                className="flex items-center gap-2 hover:underline hover:underline-offset-4 outline-offset-4"
                                href="#about"
                            >
                            About me
                            </a>
                        </li>
                        <li>
                            <a
                                className="flex items-center gap-2 hover:underline hover:underline-offset-4 outline-offset-4"
                                href="#skills"
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                className="flex items-center gap-2 hover:underline hover:underline-offset-4 outline-offset-4"
                                href="#projects"
                            >
                            Projects
                            </a>
                        </li>
                        <li>
                        <a
                                className="flex items-center gap-2 hover:underline hover:underline-offset-4 outline-offset-4"
                                href="#certifications"
                            >
                                Certifications
                            </a>
                        </li>
                        <li>
                            <a
                                className="flex items-center gap-2 hover:underline hover:underline-offset-4 outline-offset-4"
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