import { Logo } from '@/components/ui';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';
import logoHeaderSrc from '@/assets/huddle/images/logo-header.svg';

export function PrimaryNavigation() {
    return (
        <nav
            aria-label="Primary"
            className="container flex items-center justify-between"
        >
            <Logo
                link={ROUTES.HUDDLE}
                src={logoHeaderSrc}
                alt="Huddle"
                className="w-60
                desktop-lg:w-52
                desktop-md:w-48
                tablet-lg:w-44
                tablet-sm:w-40
                mobile-lg:w-36
                mobile-md:w-32"
            />

            <Link
                to={ROUTES.HUDDLE}
                className="bg-huddle-white text-huddle-very-dark-cyan rounded-full px-20 py-4 text-center font-[700] shadow-xl hover:opacity-80
                desktop-lg:px-16 desktop-lg:py-3
                tablet-lg:px-12 tablet-lg:py-2
                tablet-sm:px-8 tablet-sm:py-1
                mobile-lg:text-base
                mobile-md:px-7 mobile-md:py-2 mobile-md:text-sm"
            >
                Try It Free
            </Link>
        </nav>
    );
}
