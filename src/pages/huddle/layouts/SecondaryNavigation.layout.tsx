import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';

export function SecondaryNavigation() {
    const items = [
        [
            { label: 'About Us', path: ROUTES.HUDDLE },
            { label: 'What We Do', path: ROUTES.HUDDLE },
            { label: 'FAQ', path: ROUTES.HUDDLE },
        ],
        [
            { label: 'Career', path: ROUTES.HUDDLE },
            { label: 'Blog', path: ROUTES.HUDDLE },
            { label: 'Contact Us', path: ROUTES.HUDDLE },
        ],
    ];

    return (
        <nav
            aria-label="Secondary"
            className="col-span-2 row-[2/3] grid grid-cols-subgrid
            tablet-md:col-auto tablet-md:row-auto tablet-md:flex tablet-md:flex-col tablet-md:gap-4"
        >
            {items.map((navItem, index) => (
                <ul
                    key={index}
                    className="col-span-1 flex flex-col items-start justify-start gap-6
                    tablet-md:gap-4"
                >
                    {navItem.map(({ label, path }, index) => (
                        <li key={index}>
                            <Link
                                to={path}
                                className="text-huddle-white decoration-1 underline-offset-4 hover:underline
                                desktop-sm:text-base
                                tablet-lg:text-sm
                                tablet-md:text-base"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            ))}
        </nav>
    );
}
