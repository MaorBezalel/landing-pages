import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';

export function SecondaryNavigation() {
    const endpoints = ['About', 'Careers', 'Events', 'Products', 'Support'];

    return (
        <nav
            aria-label="Secondary"
            className="order-3
            tablet-md:order-2"
        >
            <ul
                className="flex flex-row items-center gap-10
                tablet-lg:gap-6
                tablet-md:my-6 tablet-md:flex-col tablet-md:gap-4"
            >
                {endpoints.map((endpoint, index) => (
                    <li key={index}>
                        <Link
                            to={ROUTES.LOOPSTUDIOS}
                            className="relative inline-block text-loopstudios-white before:absolute before:-bottom-1 before:left-1/2 before:h-[2px] before:w-0 before:-translate-x-1/2 before:bg-loopstudios-white before:duration-200 before:ease-in-out before:[transition-property:width] hover:before:w-[50%]
                            tablet-lg:text-sm"
                        >
                            {endpoint}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
