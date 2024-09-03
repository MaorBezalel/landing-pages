import { Link } from 'react-router-dom';
import { IconMenu } from '@/components/icons';
import { DropdownMenu } from '@/components';
import { ROUTES } from '@/constants';

export function DesktopPrimaryNav() {
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
        <>
            <menu
                className="flex flex-row items-center gap-10
                desktop-sm:gap-8
                tablet-lg:gap-4
                tablet-md:hidden"
            >
                {navItems.map((navItem) => (
                    <li>
                        <DropdownMenu
                            button={({ isOpen, setIsOpen }) => (
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    data-toggled={isOpen}
                                    className="group relative inline-flex items-center justify-center text-center text-blogr-white/70 hover:text-blogr-white active:text-blogr-white data-[toggled=true]:text-blogr-white"
                                >
                                    <span
                                        className="px-1 text-base font-[500] capitalize decoration-2 underline-offset-2 group-hover:underline group-data-[toggled=true]:underline
                                        tablet-lg:text-sm"
                                    >
                                        {navItem.label}
                                    </span>
                                    <IconMenu
                                        open={isOpen}
                                        className="ms-auto mt-[0.1rem] size-4
                                        tablet-lg:size-3"
                                    />
                                </button>
                            )}
                        >
                            {({ isOpen, setIsOpen }) => (
                                <ul
                                    className="flex w-40 flex-col gap-4 rounded-md bg-blogr-white py-10 pe-20 ps-5
                                    tablet-lg:w-32 tablet-lg:py-8 tablet-lg:pe-16 tablet-lg:ps-4"
                                >
                                    {navItem.menu.map((menuItem) => (
                                        <li>
                                            <Link
                                                to={ROUTES.BLOGR}
                                                tabIndex={isOpen ? 0 : -1}
                                                onClick={() => setIsOpen(false)}
                                                className="text-base text-blogr-very-dark-black-blue hover:font-[700]
                                            tablet-lg:text-sm"
                                            >
                                                {menuItem}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </DropdownMenu>
                    </li>
                ))}
            </menu>

            <ul
                className="ml-auto flex flex-row items-center gap-10
                tablet-lg:gap-4
                tablet-md:hidden"
            >
                <li>
                    <Link
                        to={ROUTES.BLOGR}
                        className="px-1 text-base font-[500] text-blogr-white/70 decoration-2 underline-offset-2 hover:text-blogr-white hover:underline
                        tablet-lg:text-sm"
                    >
                        Login
                    </Link>
                </li>
                <li>
                    <Link
                        to={ROUTES.BLOGR}
                        className="rounded-3xl bg-blogr-white px-8 py-3 text-base font-[500] text-blogr-light-red transition duration-300 ease-in-out hover:bg-opacity-30 hover:text-blogr-white
                        tablet-lg:text-sm"
                    >
                        Sign Up
                    </Link>
                </li>
            </ul>
        </>
    );
}
