const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer tabIndex={-1} id="footer" className="p-4 w-full max-w-7xl m-auto">
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
            <p className="text-center text-xs mt-2">© {year} Daniela Taniguchi. All rights reserved.</p>
        </footer>
    )
}

export default Footer;