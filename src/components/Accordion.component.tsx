import { useState, Dispatch, ReactNode, SetStateAction } from 'react';
import { useClickAway } from '@/hooks';

type AccordionProps = {
    button: ReactNode | ((props: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }) => ReactNode);
    children: ReactNode | ((props: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }) => ReactNode);
};

export function Accordion({ button, children }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useClickAway<HTMLDivElement>(() => setTimeout(() => setIsOpen(false), 0));

    return (
        <div
            ref={ref}
            className="relative flex h-fit min-w-full flex-col items-center justify-center"
            aria-haspopup="menu"
        >
            {button instanceof Function ? button({ isOpen, setIsOpen }) : button}
            <div
                className={`min-w-max overflow-hidden ${
                    isOpen ? 'pointer-events-auto max-h-80' : 'pointer-events-none max-h-0'
                } transition-[max-height] duration-300 ease-in-out`}
            >
                {children instanceof Function ? children({ isOpen, setIsOpen }) : children}
            </div>
        </div>
    );
}
