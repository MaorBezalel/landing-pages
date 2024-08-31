export function Hero() {
    return (
        <section
            aria-label="Hero"
            className="flex w-full
            tablet-md:items-center tablet-md:justify-center"
        >
            <h1
                className="w-[57%] border-2 border-loopstudios-white p-10 text-8xl uppercase text-loopstudios-white
                desktop-lg:w-[58%] desktop-lg:pr-24 desktop-lg:text-[5.5rem]
                desktop-md:w-[60%] desktop-md:text-[5rem]
                desktop-sm:pr-0 desktop-sm:text-7xl
                tablet-lg:w-[70%]
                tablet-lg:text-6xl
                tablet-md:w-[90%] tablet-md:text-[4rem]
                tablet-sm:w-[95%] tablet-sm:px-6 tablet-sm:text-[3.5rem]
                mobile-lg:w-[98%] mobile-lg:px-4 mobile-lg:text-[2.8rem]
                mobile-md:px-2 mobile-md:text-[2.7rem]"
            >
                Immersive experiences that deliver
            </h1>
        </section>
    );
}
