import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';
import { CREATIONS } from '@/pages/loopstudios/constants';

export function CreationSection() {
    return (
        <section
            aria-label="Creations"
            className="container grid grid-cols-[repeat(4,1fr)] gap-10 px-2
            desktop-sm:gap-6
            tablet-lg:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] tablet-lg:gap-4
            tablet-md:grid-cols-[1fr]"
        >
            <h2
                className="order-1 col-[1/4] mb-16 text-6xl font-bold uppercase text-loopstudios-black
                desktop-lg:mb-8 desktop-lg:text-5xl
                desktop-sm:text-4xl
                tablet-md:col-auto tablet-md:justify-self-center tablet-md:text-5xl
                mobile-lg:text-[2.5rem]
                mobile-md:text-4xl"
            >
                Our Creations
            </h2>
            <button
                className="order-2 col-[4/-1] mb-16 w-fit justify-self-end border border-loopstudios-black px-6 py-2 text-2xl uppercase tracking-[0.4rem] text-loopstudios-black transition-colors duration-200 ease-in-out hover:bg-loopstudios-black hover:text-loopstudios-white
                desktop-lg:mb-8 desktop-lg:text-xl
                desktop-md:text-lg
                desktop-sm:text-base
                tablet-md:order-3 tablet-md:col-auto tablet-md:mb-0 tablet-md:mt-8 tablet-md:justify-self-center tablet-md:px-20 tablet-md:py-4 tablet-md:text-2xl
                mobile-lg:px-10 mobile-lg:py-3"
            >
                See All
            </button>
            {CREATIONS.map(({ name, backgroundImageDesktop, backgroundImageMobile }, index) => (
                <Link
                    key={index}
                    to={ROUTES.LOOPSTUDIOS}
                    className={`${backgroundImageDesktop} group relative order-3 flex h-[667px] w-full flex-col justify-end bg-cover bg-no-repeat transition-colors duration-200 ease-in-out hover:bg-[rgba(255,255,255,0.6)]
                    desktop-lg:h-[600px]
                    desktop-md:h-[500px]
                    desktop-sm:h-[400px]
                    tablet-md:order-2 tablet-md:h-[240px] ${backgroundImageMobile}
                    tablet-sm:h-[200px]
                    mobile-lg:h-[150px]
                    mobile-md:h-[120px]`}
                >
                    <h3
                        className="p-10 text-5xl uppercase text-loopstudios-white after:absolute
                        after:inset-0 after:z-10 after:h-full after:w-full after:bg-gradient-to-t after:from-[hsla(0,0%,0%,0.493)] after:to-[hsla(0,0%,0%,0)] group-hover:from-100% group-hover:text-loopstudios-black group-hover:after:bg-[hsla(0,0%,100%,0.493)] group-hover:after:from-[hsla(0,0%,100%,0.493)] group-hover:after:to-[hsla(0,0%,100%,0)]
                        desktop-md:text-4xl
                        desktop-sm:text-3xl
                        tablet-lg:p-4 tablet-lg:text-2xl
                        tablet-md:p-8 tablet-md:text-5xl
                        tablet-sm:p-4 tablet-sm:text-4xl
                        mobile-lg:text-3xl
                        mobile-md:p-2 mobile-md:text-2xl"
                    >
                        <pre className="relative z-20 font-josefin-sans">{name}</pre>
                    </h3>
                </Link>
            ))}
        </section>
    );
}
