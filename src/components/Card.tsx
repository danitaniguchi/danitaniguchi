import Image from "next/image";

interface Card {
    href?: string;
    src: string;
    alt: string;
    ariaLabel?: string;
    children?: React.ReactNode;
}


const Card = ({href, src, alt="", ariaLabel="", children}:Card) => {
    return (
        <a href={href} target="_blank" aria-label={ariaLabel} className="relative flex flex-col border border-gray-950/5 shadow-md md:h-full md:hover:z-1 md:hover:scale-110 bg-white">
            <Image 
                src={src}
                width={360}
                height={100}
                alt={alt}
                className="dark:invert object-cover object-top w-full max-h-[170px]"
            />
            <div className="p-4 md:h-full">
                {children}
            </div>
        </a>
    )
}

export default Card; 
