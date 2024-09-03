import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';

export function Hero() {
    return (
        <section
            aria-label="Hero"
            className="my-auto flex flex-col gap-20
        desktop-md:gap-14"
        >
            <hgroup
                id="hero-heading"
                className="flex flex-col items-center justify-center gap-4 text-center"
            >
                <h1
                    className="text-8xl font-[700] text-blogr-white
                desktop-lg:text-7xl
                desktop-md:text-6xl
                tablet-sm:text-5xl
                mobile-lg:text-4xl
                mobile-md:text-3xl"
                >
                    A modern publishing platform
                </h1>
                <p
                    className="text-2xl text-blogr-white/70
                desktop-lg:text-xl
                desktop-md:text-lg
                tablet-sm:text-base
                mobile-lg:px-10
                mobile-md:px-8"
                >
                    Grow your audience and build your online brand
                </p>
            </hgroup>

            <ul
                id="hero-cta"
                className="flex flex-row items-center justify-center gap-6"
            >
                <li>
                    <Link
                        to={ROUTES.BLOGR}
                        className="rounded-[30rem] bg-blogr-white px-5 py-5 text-2xl font-[700] text-blogr-very-light-red transition duration-300 ease-in-out hover:bg-opacity-30 hover:text-blogr-white
                        desktop-lg:px-4 desktop-lg:py-4 desktop-lg:text-xl
                        desktop-md:px-3 desktop-md:py-4 desktop-md:text-lg
                        tablet-sm:px-2 tablet-sm:py-3 tablet-sm:text-base"
                    >
                        Start for Free
                    </Link>
                </li>
                <li>
                    <Link
                        to={ROUTES.BLOGR}
                        className="rounded-[30rem] border border-blogr-white px-8 py-5 text-2xl font-[700] text-blogr-white transition duration-300 ease-in-out hover:bg-blogr-white hover:text-blogr-very-light-red
                        desktop-lg:px-6 desktop-lg:py-4 desktop-lg:text-xl
                        desktop-md:px-5 desktop-md:py-4 desktop-md:text-lg
                        tablet-sm:px-4 tablet-sm:py-3 tablet-sm:text-base"
                    >
                        Learn More
                    </Link>
                </li>
            </ul>
        </section>
    );
}
