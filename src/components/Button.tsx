type TargetOption = '_blank' | '_self' | '_parent' | '_top';
type StyleOption = 'solid' | 'transparent';

interface MyLinkProps {
  target: TargetOption;
  href: string;
  text: string;
  style: StyleOption;
  ariaLabel?: string;
}

const Button =({ href, text, target, style, ariaLabel= "" }: MyLinkProps) => {
    const customClass = {
        'solid': 'border-transparent dark:bg-white bg-foreground dark:text-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]',
        'transparent': 'border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent',
    };

    return href && text && target && (
        <a  href={href} 
            target={target} 
            className={"rounded-full border border-solid transition-colors flex items-center justify-center gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 outline-offset-4 w-full sm:w-auto " + customClass[style]}
            aria-label={ariaLabel}
        >                                      
            {text}
        </a>
    );
}

export default Button;