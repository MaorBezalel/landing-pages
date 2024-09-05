import { ROUTES } from '@/constants';
import { HamburgerMenu } from '@/lib';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';

export function MobileSiteLinks() {
    const navItems = [
        {
            label: 'About',
            route: ROUTES.SUNNYSIDE,
            className: undefined,
        },
        {
            label: 'Services',
            route: ROUTES.SUNNYSIDE,
            className: undefined,
        },
        {
            label: 'Projects',
            route: ROUTES.SUNNYSIDE,
            className: undefined,
        },
        {
            label: 'Contact',
            route: ROUTES.SUNNYSIDE,
            className:
                'rounded-3xl bg-sunnyside-yellow px-6 py-[0.9rem] font-fraunces text-base uppercase text-sunnyside-very-dark-desaturated-blue transition-colors duration-200 hover:bg-sunnyside-light-blue hover:text-sunnyside-white',
        },
    ];

    return (
        <HamburgerMenu
            hamburgerComponent={({ isOpen, setIsOpen }) => (
                <Hamburger
                    color="#fff"
                    rounded
                    size={24}
                    label="Show menu"
                    toggled={isOpen}
                    toggle={setIsOpen}
                />
            )}
            width="w-[93%]"
            absoluteTopStyles="top-[calc(100%+30px)]"
        >
            {({ setIsOpen }) => (
                <ul className="flex flex-col items-center gap-10 bg-sunnyside-white px-20 py-10 text-center text-xl text-sunnyside-very-dark-grayish-blue after:absolute after:right-0 after:top-0 after:-mt-11 after:h-0 after:w-0 after:translate-x-0 after:translate-y-[10%] after:border-x-[40px] after:border-b-[40px] after:border-t-[40px] after:border-solid after:border-b-sunnyside-white after:border-l-transparent after:border-r-[white] after:border-t-transparent after:bg-transparent">
                    {navItems.map((navItem, index) => (
                        <li key={index}>
                            <Link
                                to={navItem.route}
                                onClick={() => setIsOpen(false)}
                                className={navItem.className}
                            >
                                {navItem.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </HamburgerMenu>
    );
}
