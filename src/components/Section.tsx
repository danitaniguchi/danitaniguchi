interface ContainerProps {
    children: React.ReactNode;
    customClass?: string;
    mode?: string;
    sectionId: string;
}

const Section = ({children, customClass= '', mode='', sectionId}:ContainerProps) => {
    return (
        <section id={sectionId} className={`w-full ${mode}`}>
            <div className={`w-full max-w-7xl min-h-[500px] m-auto px-8 py-10 sm:py-20 grid grid-cols-1 md:grid-cols-12 md:gap-x-6 gap-y-8 md:justify-items-start ${customClass}`}>
                {children}
            </div>
        </section>
    )
}

export default Section; 
