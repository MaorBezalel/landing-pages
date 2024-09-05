import illustrationPhones from '@/assets/blogr/images/illustration-phones.svg';

export function ServicesSection() {
    return (
        <section
            aria-label="Services"
            className="mb-80 mt-72 w-full rounded-es-[7rem] rounded-se-[7rem] bg-blogr-gradient-body
            desktop-sm:mb-72 desktop-sm:mt-60
            tablet-lg:mt-48
            tablet-md:mb-14
            tablet-sm:mt-64
            mobile-lg:mb-12 mobile-lg:mt-48"
        >
            <div
                id="services-background-pattern-circles"
                className="w-full rounded-es-[7rem] rounded-se-[7rem] bg-[url(@/assets/blogr/images/bg-pattern-circles.svg)] bg-[-29rem_-48rem] bg-no-repeat [background-size:1521px_1527px]
                desktop-md:bg-[-12rem_-28rem] desktop-md:[background-size:912.6px_916.2px]
                tablet-lg:bg-[-15rem_-33rem]
                tablet-md:bg-[50%_-20rem] tablet-md:[background-size:708px_712px]
                mobile-lg:bg-[50%_-15rem] mobile-lg:[background-size:608px_612px]"
            >
                <div
                    id="services-content-grid"
                    className="container grid grid-cols-[1fr_1fr] grid-rows-[1fr]
                    desktop-md:grid-cols-[auto_auto] desktop-md:gap-x-72
                    desktop-sm:gap-x-40
                    tablet-lg:gap-x-32
                    tablet-md:grid-cols-[auto] tablet-md:grid-rows-[1fr_1fr] tablet-md:px-16
                    tablet-sm:px-8 tablet-sm:pb-16"
                >
                    <div
                        id="services-content-text"
                        className="col-[2/3] row-[1/-1] flex flex-col justify-center gap-10
                        tablet-md:col-[1/1] tablet-md:row-[2/3] tablet-md:items-center tablet-md:justify-start tablet-md:gap-6 tablet-md:text-center"
                    >
                        <h2
                            className="text-6xl font-[700] text-blogr-white
                            desktop-lg:text-5xl
                            desktop-md:text-[2.75rem]
                            desktop-sm:text-4xl
                            tablet-lg:text-3xl
                            tablet-md:text-5xl
                            mobile-lg:text-[2.75rem]
                            mobile-md:text-4xl"
                        >
                            State of the Art Infrastructure
                        </h2>
                        <p
                            className="text-lg text-blogr-grayish-blue
                            desktop-md:text-base
                            tablet-md:text-lg
                            mobile-lg:text-base"
                        >
                            With reliability and speed in mind, worldwide data centers provide the backbone for
                            ultra-fast connectivity. This ensures your site will load instantly, no matter where your
                            readers are, keeping your site competitive.
                        </p>
                    </div>

                    <img
                        id="services-content-illustration-phones"
                        src={illustrationPhones}
                        alt="Phones illustration"
                        className="col-[1/2] row-[1/-1] translate-x-16 translate-y-8 scale-[1.4]
                        desktop-lg:translate-x-0
                        desktop-md:translate-x-32 desktop-md:scale-[1.6]
                        desktop-sm:translate-x-4
                        tablet-md:col-[1/1] tablet-md:row-[1/2] tablet-md:w-1/2 tablet-md:-translate-y-16
                        tablet-md:translate-x-1/2
                        tablet-sm:scale-[2]
                        mobile-lg:-translate-y-6 mobile-lg:scale-[2.7]
                        mobile-md:-translate-y-0 mobile-md:scale-[3]"
                    />
                </div>
            </div>
        </section>
    );
}
