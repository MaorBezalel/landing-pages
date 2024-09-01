import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';
import logoHeader from '@/assets/sunnyside/images/logo-header.svg';
import logoFooter from '@/assets/sunnyside/images/logo-footer.svg';

type LogoProps = {
    type: 'header' | 'footer';
    className?: string;
};

export function Logo({ type, className }: LogoProps) {
    return (
        <Link to={ROUTES.SUNNYSIDE}>
            <img
                src={type === 'header' ? logoHeader : logoFooter}
                alt="Sunnyside"
                className={className}
            />
        </Link>
    );
}
