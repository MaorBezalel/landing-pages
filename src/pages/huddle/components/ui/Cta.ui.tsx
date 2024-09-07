import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';

export function Cta() {
    return (
        <article
            className="absolute left-1/2 top-[calc(100%+5rem)] z-10 flex w-[60%] -translate-x-1/2 flex-col items-center justify-center gap-10 rounded-2xl bg-huddle-white px-20 py-14 shadow-[1px_1px_15px_-10px]
            desktop-sm:px-10
            tablet-lg:top-[calc(100%+6rem)] tablet-lg:w-[80%] tablet-lg:px-10 tablet-lg:py-10
            tablet-md:gap-8
            tablet-sm:top-[calc(100%+8rem)] tablet-sm:w-[100%] tablet-sm:px-8 tablet-sm:py-8
            mobile-lg:top-[calc(100%+9rem)] mobile-lg:gap-6 mobile-lg:px-4
            mobile-md:px-2"
        >
            <h2
                className="text-center text-4xl text-huddle-very-dark-cyan
                desktop-lg:text-3xl
                desktop-sm:text-[1.65rem]
                tablet-lg:text-2xl
                tablet-sm:text-xl
                mobile-lg:text-lg"
            >
                Ready To Build Your Community?
            </h2>

            <Link
                to={ROUTES.HUDDLE}
                className="w-fit rounded-full bg-huddle-pink px-20 py-5 text-center font-[700] text-huddle-very-pale-cyan shadow-xl hover:opacity-80
                desktop-lg:text-base
                desktop-sm:px-16 desktop-sm:py-4 desktop-sm:text-sm
                tablet-lg:px-12
                tablet-md:px-20 tablet-md:py-5 tablet-md:text-lg
                tablet-sm:px-16 tablet-sm:py-4 tablet-sm:text-base
                mobile-lg:px-12 mobile-lg:py-3 mobile-lg:text-sm
                mobile-md:px-10"
            >
                Get Started For Free
            </Link>
        </article>
    );
}
