import { useState } from 'react';
import { useIsDomReady } from '@/hooks';
import { Link } from 'react-router-dom';
import { HamburgerDrawer } from '@/pages/loopstudios/lib';
import { Logo } from '@/components/ui';
import { ROUTES } from '@/constants';
import logoSrc from '@/assets/loopstudios/images/logo.svg';

export function PrimaryNavigation() {
    const [isOpen, setIsOpen] = useState(false);
    const isDomReady = useIsDomReady();
    const endpoints = ['About', 'Careers', 'Events', 'Products', 'Support'];

    return (
        <nav
            className="flex items-center justify-between"
            aria-label="Primary"
        >
            <Logo
                link={ROUTES.LOOPSTUDIOS}
                src={logoSrc}
                alt="Loopstudios"
                className="relative z-20 h-[3rem] w-[13rem] object-contain
                tablet-lg:h-[2.5rem] tablet-lg:w-[10rem]
                tablet-md:w-[12rem]"
            />

            <ul
                className="flex flex-row items-center gap-10
                desktop-sm:gap-8
                tablet-lg:gap-6
                tablet-md:hidden"
            >
                {endpoints.map((endpoint, index) => (
                    <li key={index}>
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
                    {endpoints.map((endpoint, index) => (
                        <li key={index}>
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
