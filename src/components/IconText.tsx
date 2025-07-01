import Image from "next/image";

interface IconText {
    src: string;
    alt: string;
    children?: React.ReactNode;
}

const IconText = ({src, alt="", children}:IconText) => {
    return (
        <div className="flex gap-2">
            <Image 
                src={src}
                width={36}
                height={36}
                alt={alt}
                className="dark:invert object-contain"
            />
            { children }
        </div>
    )
}

export default IconText; 
