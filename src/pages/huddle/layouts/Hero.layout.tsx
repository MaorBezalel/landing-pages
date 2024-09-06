import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';
import illustrationMockupsSrc from '@/assets/huddle/images/illustration-mockups.svg';

export function Hero() {
    return (
        <section
            aria-label="Hero"
            className="container flex items-center gap-52
            desktop-lg:gap-48
            desktop-md:gap-20
            desktop-sm:gap-10
            tablet-lg:gap-8
            tablet-md:flex-col tablet-md:justify-center tablet-md:gap-20 tablet-md:text-center"
        >
            <div
                role="presentation"
                className="flex flex-col gap-10
                desktop-lg:gap-8
                desktop-sm:gap-6
                tablet-lg:gap-4
                tablet-md:items-center tablet-md:justify-center tablet-md:gap-10 tablet-md:px-6
                tablet-sm:gap-8 tablet-sm:px-4"
            >
                <h1
                    className="text-huddle-very-dark-cyan text-[3.5rem]/snug
                    desktop-lg:text-5xl/snug
                    desktop-md:text-[2.5rem]/snug
                    desktop-sm:text-4xl/snug
                    tablet-lg:text-[1.73rem]/snug
                    tablet-md:text-5xl/snug
                    tablet-sm:text-[2.5rem]/snug
                    mobile-lg:text-3xl
                    mobile-md:text-[1.6rem]/snug"
                >
                    Build The Community Your Fans Will Love
                </h1>
                <p
                    className="text-huddle-very-dark-cyan text-xl font-[400]
                    desktop-lg:text-lg
                    desktop-sm:text-base
                    tablet-lg:text-sm/normal
                    tablet-md:text-xl
                    tablet-sm:text-lg"
                >
                    Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
                    connections with your users as you engage in genuine discussion.
                </p>
                <Link
                    to={ROUTES.HUDDLE}
                    className="bg-huddle-pink text-huddle-very-pale-cyan w-fit rounded-full px-20 py-5 text-center font-[700] shadow-xl hover:opacity-80
                    desktop-lg:text-base
                    desktop-sm:px-16 desktop-sm:py-4 desktop-sm:text-sm
                    tablet-lg:px-12
                    tablet-md:px-20 tablet-md:py-5 tablet-md:text-lg
                    mobile-lg:py-4 mobile-lg:text-base
                    mobile-md:px-16 mobile-md:text-sm"
                >
                    Get Started For Free
                </Link>
            </div>

            <img
                src={illustrationMockupsSrc}
                alt="Illustration of mockups"
                className="w-[50rem]
                desktop-lg:w-[45rem]
                desktop-md:w-[43rem]
                desktop-sm:w-[34rem]
                tablet-lg:w-[25rem]
                tablet-md:w-[34rem]"
            />
        </section>
    );
}
