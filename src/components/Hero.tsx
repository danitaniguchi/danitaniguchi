import Button from "./Button";

const Hero = () => {
    const year = new Date().getFullYear() - 2018;
    return (
        <section className="w-full dark text-white bottom-cut">
          <div className="min-h-[60vh] dark:bg-gray-800 flex ">
            <div className="w-full max-w-7xl m-auto px-8 py-10 flex gap-4 flex-col justify-center items-start">
                <h1 className="leading-none">
                    <span className="text-dPinkDark">Dani</span> <span className="text-dPurpleDark">Taniguchi</span>
                </h1>
                <h2 className="h3">
                    Front‑End Developer
                </h2>
                <p>
                    With {year}+ years of experience, I create fast, responsive, and accessible websites that put users first. 
                    <br/>My work blends clean code, bringing designs to life, and a strong commitment to web standards.
                </p>
                <Button href="https://www.linkedin.com/in/danielataniguchi/" text="Linkedin" target="_blank" style="solid" ariaLabel="Go to Daniela Taniguchi's Linkedin" />
            </div>
          </div>
        </section>
    );
}

export default Hero;