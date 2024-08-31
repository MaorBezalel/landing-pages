import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';
import logo from '@/assets/loopstudios/images/logo.svg';

export function Logo() {
    return (
        <Link to={ROUTES.LOOPSTUDIOS}>
            <img
                src={logo}
                alt="Loopstudios"
                className="relative z-20 h-[3rem] w-[13rem] object-contain
                tablet-lg:h-[2.5rem] tablet-lg:w-[10rem]
                tablet-md:w-[12rem]"
            />
        </Link>
    );
}
