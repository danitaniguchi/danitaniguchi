import Image from "next/image";

interface CardHorizontal {
    href?: string;
    src: string;
    alt: string;
    ariaLabel?: string;
    children?: React.ReactNode;
}


const CardHorizontal = ({href, src, alt="", ariaLabel="", children}:CardHorizontal) => {
    return (
        <a href={href} target="_blank" aria-label={ariaLabel} className="relative p-8 flex flex-col lg:flex-row gap-8 border border-gray-950/5 shadow-md w-full md:h-full md:hover:z-1 md:hover:scale-110 bg-white">
            <Image 
                src={src}
                width={150}
                height={150}
                alt={alt}
                className="dark:invert object-contain"
            />
            <div className="md:h-full">
                {children}
            </div>
        </a>
    )
}

export default CardHorizontal; 
