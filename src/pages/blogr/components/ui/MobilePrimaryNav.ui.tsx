import { Link } from 'react-router-dom';
import { IconMenu } from '@/components/icons';
import { HamburgerMenu } from '@/lib';
import Hamburger from 'hamburger-react';
import { Accordion } from '@/components';
import { ROUTES } from '@/constants';

export function MobilePrimaryNav() {
    const navItems = [
        {
            label: 'Product',
            menu: ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'],
        },
        {
            label: 'Company',
            menu: ['About', 'Team', 'Blog', 'Careers'],
        },
        {
            label: 'Connect',
            menu: ['Contact', 'Newsletter', 'LinkedIn'],
        },
    ];

    return (
        <HamburgerMenu
            hamburgerComponent={({ isOpen, setIsOpen }) => (
                <button className="hidden tablet-md:block">
                    <Hamburger
                        toggled={isOpen}
                        toggle={setIsOpen}
                        size={24}
                        color="#fff"
                    />
                </button>
            )}
        >
            <menu className="flex w-80 flex-col items-center justify-center gap-6 rounded-md bg-white py-5">
                {navItems.map((navItem) => (
                    <li className="w-full">
                        <Accordion
                            button={({ isOpen, setIsOpen }) => (
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    data-toggled={isOpen}
                                    className="active:text-blogr-very-dark-blue/hover:text-blogr-very-dark-blue/70 data-[toggled=true]:text-blogr-very-dark-blue/hover:text-blogr-very-dark-blue/70 group relative inline-flex items-center justify-center text-center text-blogr-very-dark-blue hover:text-blogr-very-dark-blue/70"
                                >
                                    <span className="px-1 text-base font-[500] capitalize decoration-2 underline-offset-2">
                                        {navItem.label}
                                    </span>
                                    <IconMenu
                                        open={isOpen}
                                        className="ms-auto mt-[0.1rem] size-4 text-blogr-light-red"
                                    />
                                </button>
                            )}
                        >
                            {({ isOpen, setIsOpen }) => (
                                <ul
                                    className="flex w-40 flex-col items-center justify-center gap-4 rounded-sm bg-blogr-grayish-blue px-10 py-5
                                    mobile-lg:w-32"
                                >
                                    {navItem.menu.map((menuItem) => (
                                        <li>
                                            <Link
                                                to={ROUTES.BLOGR}
                                                tabIndex={isOpen ? 0 : -1}
                                                onClick={() => setIsOpen(false)}
                                                className="text-base text-blogr-very-dark-black-blue hover:font-[700]"
                                            >
                                                {menuItem}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </Accordion>
                    </li>
                ))}
                <hr className="w-[90%]" />
                <li>
                    <Link
                        to={ROUTES.BLOGR}
                        className="text-center text-base text-blogr-very-dark-black-blue hover:font-[700]"
                    >
                        Login
                    </Link>
                </li>
                <li>
                    <Link
                        to={ROUTES.BLOGR}
                        className="rounded-3xl bg-blogr-gradient-cta px-8 py-3 text-base font-[500] text-blogr-white transition duration-300 ease-in-out hover:bg-opacity-30 hover:text-blogr-white"
                    >
                        Sign Up
                    </Link>
                </li>
            </menu>
        </HamburgerMenu>
    );
}
