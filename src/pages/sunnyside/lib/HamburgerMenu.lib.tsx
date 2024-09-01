import { useState } from 'react';
import { useClickAway } from '@/hooks';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';

export function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const hamburgerMenuRef = useClickAway<HTMLDivElement>(() => {
        setIsOpen(false);
    });

    return (
        <div
            ref={hamburgerMenuRef}
            className="hidden tablet-md:block"
        >
            <Hamburger
                color="#fff"
                rounded
                size={24}
                label="Show menu"
                toggled={isOpen}
                toggle={setIsOpen}
            />

            <div
                className={`absolute left-1/2 top-20 w-[93%] -translate-x-1/2 border-transparent bg-sunnyside-white
                after:absolute after:right-0 after:top-0 after:-mt-11 after:h-0 after:w-0 after:translate-x-0 after:translate-y-[10%] after:border-x-[40px] after:border-b-[40px] after:border-t-[40px] after:border-solid after:border-b-sunnyside-white after:border-l-transparent after:border-r-[white] after:border-t-transparent after:bg-transparent ${
                    isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
                } transition-opacity duration-200`}
                aria-hidden={!isOpen}
                aria-label="Hamburger menu"
            >
                <ul className="flex flex-col items-center gap-10 px-20 py-10 text-center text-xl text-sunnyside-very-dark-grayish-blue">
                    <li>
                        <Link
                            to={ROUTES.SUNNYSIDE}
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={ROUTES.SUNNYSIDE}
                            onClick={() => setIsOpen(false)}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={ROUTES.SUNNYSIDE}
                            onClick={() => setIsOpen(false)}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={ROUTES.SUNNYSIDE}
                            onClick={() => setIsOpen(false)}
                            className="rounded-3xl bg-sunnyside-yellow px-6 py-[0.9rem] font-fraunces text-base uppercase text-sunnyside-very-dark-desaturated-blue transition-colors duration-200 hover:bg-sunnyside-light-blue hover:text-sunnyside-white"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
