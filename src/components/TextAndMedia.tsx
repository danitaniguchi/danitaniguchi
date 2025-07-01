import Image from "next/image";

interface TextAndMedia {
    src: string;
    alt: string;
    text?: React.ReactNode;
    imagePosition?: 'left' | 'right'; 
}

const TextAndMedia = ({src, alt="", text, imagePosition="left"}: TextAndMedia) => {
    const classImage = {
        left: "md:col-start-7",
        right: "md:col-start-1"
    }

    const classText = {
        right: "md:col-start-8",
        left: "md:col-start-1"
    }
    const textContainer = (
        <div className={`col-span-12 md:col-span-6 content-center ${classImage[imagePosition]}`}>
            {text}
        </div>
    )
    return (
        <>
            { imagePosition === "right" && textContainer }
            <div className={`col-span-12 md:col-span-5 ${classText[imagePosition]}`}>
                <Image 
                    src={src}
                    width={765}
                    height={783}
                    alt={alt}
                />
            </div>
            { imagePosition === "left" && textContainer }
        </>
    );
}

export default TextAndMedia;