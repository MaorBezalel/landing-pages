import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';
import logo from '@/assets/loopstudios/images/logo.svg';

type LogoProps = {
    className?: string;
};

export function Logo({ className }: LogoProps) {
    return (
        <Link
            className="inline-block w-fit"
            to={ROUTES.LOOPSTUDIOS}
        >
            <img
                src={logo}
                alt="Loopstudios"
                className={className}
            />
        </Link>
    );
}
