import { useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { useClickAway } from '@/hooks';

type DropdownMenuProps = {
    button: ReactNode | ((props: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }) => ReactNode);
    children: ReactNode | ((props: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }) => ReactNode);
};

export function DropdownMenu({ button, children }: DropdownMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useClickAway<HTMLDivElement>(() => setIsOpen(false));

    return (
        <div
            ref={ref}
            className="relative h-fit min-w-full"
            aria-haspopup="menu"
        >
            {button instanceof Function ? button({ isOpen, setIsOpen }) : button}
            <div
                className={`absolute left-1/2 top-[calc(100%+5px)] z-50 h-fit min-w-max -translate-x-1/2 ${
                    isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                } transition-opacity duration-300 ease-in-out`}
                aria-hidden={!isOpen}
            >
                {children instanceof Function ? children({ isOpen, setIsOpen }) : children}
            </div>
        </div>
    );
}
