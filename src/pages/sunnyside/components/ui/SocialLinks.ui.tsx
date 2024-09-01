import { Link } from 'react-router-dom';
import { IconFacebook, IconInstagram, IconPinterest, IconTwitter } from '@/components/icons';
import { ROUTES } from '@/constants';

export function SocialLinks() {
    return (
        <ul
            id="Social Links"
            className="flex flex-row items-center gap-8"
        >
            <li>
                <Link to={ROUTES.SUNNYSIDE}>
                    <IconFacebook className="text-sunnyside-dark-desaturated-cyan transition-colors duration-200 hover:text-sunnyside-white" />
                </Link>
            </li>
            <li>
                <Link to={ROUTES.SUNNYSIDE}>
                    <IconInstagram className="text-sunnyside-dark-desaturated-cyan transition-colors duration-200 hover:text-sunnyside-white" />
                </Link>
            </li>
            <li>
                <Link to={ROUTES.SUNNYSIDE}>
                    <IconTwitter className="text-sunnyside-dark-desaturated-cyan transition-colors duration-200 hover:text-sunnyside-white" />
                </Link>
            </li>
            <li>
                <Link to={ROUTES.SUNNYSIDE}>
                    <IconPinterest className="text-sunnyside-dark-desaturated-cyan transition-colors duration-200 hover:text-sunnyside-white" />
                </Link>
            </li>
        </ul>
    );
}
