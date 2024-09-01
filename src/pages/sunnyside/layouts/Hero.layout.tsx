import arrowDownIcon from '@/assets/sunnyside/images/icon-arrow-down.svg';

export function Hero() {
    return (
        <section
            id="hero"
            className="flex flex-col items-center justify-center gap-28 text-center text-sunnyside-white
            desktop-md:gap-24
            tablet-md:gap-20
            mobile-lg:gap-10"
        >
            <h1
                className="font-fraunces text-7xl font-[900] uppercase tracking-[0.6rem]
                desktop-md:text-6xl
                desktop-sm:text-5xl
                tablet-sm:text-4xl
                mobile-lg:text-5xl
                mobile-md:text-[2.5rem]"
            >
                We Are Creative
            </h1>
            <img
                className="size-40 object-contain
                desktop-md:size-32"
                src={arrowDownIcon}
                alt="Arrow down"
            />
        </section>
    );
}
