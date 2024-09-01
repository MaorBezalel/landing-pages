export function AboutSection() {
    return (
        <section
            aria-label="About"
            className="container grid h-[667px] grid-cols-[2fr_0.55fr_1fr] grid-rows-[1.1fr_1fr_0.7fr] pl-2 pr-60
            desktop-lg:pr-0
            desktop-md:h-[600px]
            desktop-sm:h-[500px]
            tablet-lg:h-[400px]
            tablet-md:flex tablet-md:h-fit tablet-md:flex-col-reverse tablet-md:gap-8 tablet-md:px-2"
        >
            <div
                className="z-10 col-[2/4] row-[2/4] flex flex-col justify-end gap-8 bg-loopstudios-white pl-20
                desktop-md:gap-4 desktop-md:pl-16
                desktop-sm:gap-2 desktop-sm:pl-8
                tablet-md:items-center tablet-md:gap-6 tablet-md:px-10 tablet-md:text-center
                tablet-sm:px-5"
            >
                <h2
                    className="text-6xl font-bold uppercase text-loopstudios-black
                    desktop-md:text-[3.5rem]
                    desktop-sm:text-5xl
                    tablet-lg:text-4xl
                    tablet-md:text-6xl
                    tablet-sm:text-5xl
                    mobile-lg:text-4xl
                    mobile-md:text-3xl"
                >
                    The Leader in Interactive VR
                </h2>
                <p
                    className="text-lg text-loopstudios-dark-gray
                    desktop-md:text-[15px]
                    tablet-lg:text-sm
                    tablet-md:text-lg
                    tablet-sm:text-[15px]
                    mobile-md:text-sm"
                >
                    Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the
                    best companies around the globe. Our award-winning creations have transformed businesses through
                    digital experiences that bind to their brand.
                </p>
            </div>
            <div
                className="col-[1/3] row-[1/4] bg-[url(@/assets/loopstudios/images/desktop/image-interactive.jpg)] bg-cover bg-no-repeat
                tablet-md:h-[448px] tablet-md:bg-[url(@/assets/loopstudios/images/mobile/image-interactive.jpg)]
                tablet-sm:h-[370px]
                mobile-lg:h-[300px]
                mobile-md:h-[250px]"
            />
        </section>
    );
}
