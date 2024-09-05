import { useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { useClickAway } from '@/hooks';

type HamburgerMenuProps = {
    hamburgerComponent: (props: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }) => ReactNode;
    width?: string;
    absoluteTopStyles?: string;
    children: ReactNode | ((props: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }) => ReactNode);
};

export function HamburgerMenu({
    hamburgerComponent,
    width = 'min-w-max',
    absoluteTopStyles = 'top-[calc(100%+5px)]',
    children,
}: HamburgerMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useClickAway<HTMLDivElement>(() => setIsOpen(false));

    return (
        <div
            ref={ref}
            className="hidden h-fit min-w-fit tablet-md:block"
            aria-haspopup="menu"
        >
            {hamburgerComponent({ isOpen, setIsOpen })}
            <div
                className={`absolute left-1/2 ${absoluteTopStyles} z-50 h-fit ${width} -translate-x-1/2 ${
                    isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                } transition-opacity duration-300 ease-in-out`}
                aria-hidden={!isOpen}
            >
                {children instanceof Function ? children({ isOpen, setIsOpen }) : children}
            </div>
        </div>
    );
}
