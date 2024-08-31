import { HamburgerDrawer } from '@/pages/loopstudios/lib';
import { Logo } from '@/pages/loopstudios/components/ui';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ROUTES } from '@/constants';
import { useIsDomReady } from '@/hooks';

export function PrimaryNavigation() {
    const [isOpen, setIsOpen] = useState(false);
    const isDomReady = useIsDomReady();
    const endpoints = ['About', 'Careers', 'Events', 'Products', 'Support'];

    return (
        <nav
            className="flex items-center justify-between"
            aria-label="Primary"
        >
            <Logo />

            <ul
                className="flex flex-row items-center gap-10
                desktop-sm:gap-8
                tablet-lg:gap-6
                tablet-md:hidden"
            >
                {endpoints.map((endpoint) => (
                    <li>
                        <Link
                            to={ROUTES.LOOPSTUDIOS}
                            className="relative inline-block text-lg text-loopstudios-white before:absolute before:-bottom-1 before:left-1/2 before:h-[2px] before:w-0 before:-translate-x-1/2 before:bg-loopstudios-white before:duration-200 before:ease-in-out before:[transition-property:width] hover:before:w-[50%]
                            desktop-md:text-[15px]
                            tablet-lg:text-sm"
                        >
                            {endpoint}
                        </Link>
                    </li>
                ))}
            </ul>

            <HamburgerDrawer
                toggled={isOpen}
                toggle={setIsOpen}
                container={document.getElementById('wrapper')!}
                mount={isDomReady}
            >
                <ul
                    className={`container flex flex-col items-start gap-10 px-2 py-60 duration-300 ease-in-out [transition-property:opacity] ${
                        isOpen ? 'opacity-100 delay-[400ms]' : 'opacity-0'
                    }`}
                >
                    {endpoints.map((endpoint) => (
                        <li>
                            <Link
                                to={ROUTES.LOOPSTUDIOS}
                                className="font-josefin-sans text-3xl uppercase text-loopstudios-white hover:text-loopstudios-white"
                            >
                                {endpoint}
                            </Link>
                        </li>
                    ))}
                </ul>
            </HamburgerDrawer>
        </nav>
    );
}
