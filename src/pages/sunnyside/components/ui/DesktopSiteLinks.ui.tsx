import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';

type DesktopSiteLinksProps = {
    type: 'header' | 'footer';
};

export function DesktopSiteLinks({ type }: DesktopSiteLinksProps) {
    switch (type) {
        case 'header':
            return (
                <ul
                    className="flex flex-row gap-14 text-sunnyside-white 
                    tablet-lg:gap-8 tablet-lg:text-base
                    tablet-md:hidden"
                >
                    <li>
                        <Link to={ROUTES.SUNNYSIDE}>About</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.SUNNYSIDE}>Services</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.SUNNYSIDE}>Projects</Link>
                    </li>
                    <li>
                        <Link
                            to={ROUTES.SUNNYSIDE}
                            className="rounded-3xl bg-sunnyside-white px-6 py-[0.9rem] font-fraunces uppercase text-sunnyside-very-dark-desaturated-blue transition-colors duration-200 hover:bg-sunnyside-light-blue hover:text-sunnyside-white
                            tablet-lg:px-4 tablet-lg:py-[0.8rem]"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            );
        case 'footer':
            return (
                <ul className="flex flex-row gap-16">
                    <li>
                        <Link
                            to={ROUTES.SUNNYSIDE}
                            className="text-sunnyside-dark-moderate-cyan transition-colors duration-200 hover:text-sunnyside-white"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={ROUTES.SUNNYSIDE}
                            className="text-sunnyside-dark-moderate-cyan transition-colors duration-200 hover:text-sunnyside-white"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={ROUTES.SUNNYSIDE}
                            className="text-sunnyside-dark-moderate-cyan transition-colors duration-200 hover:text-sunnyside-white"
                        >
                            Projects
                        </Link>
                    </li>
                </ul>
            );
    }
}
