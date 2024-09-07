type ContentCardProps = {
    layout: 'text-image' | 'image-text';
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
};

export function ContentCard({ layout, title, description, imageSrc, imageAlt }: ContentCardProps) {
    const largeScreenLayout = layout === 'text-image' ? 'flex-row' : 'flex-row-reverse';
    const smallScreenLayout = layout === 'text-image' ? 'tablet-md:flex-col-reverse' : 'tablet-md:flex-col';

    return (
        <article
            className={`flex h-full w-full items-center gap-60 rounded-3xl py-10 pe-16 ps-40 shadow-[2px_2px_20px_-7px_rgba(0,0,0,0.3)] ${largeScreenLayout}
            desktop-lg:gap-40 desktop-lg:ps-32
            desktop-md:gap-32 desktop-sm:gap-20
            desktop-sm:ps-16 
            tablet-lg:gap-14 tablet-lg:pe-6 tablet-lg:ps-8 
            tablet-md:flex-col-reverse tablet-md:items-stretch tablet-md:px-16 tablet-md:pb-14 tablet-md:pt-20 ${smallScreenLayout}
            tablet-sm:px-10 tablet-sm:pb-10 tablet-sm:pt-16 
            mobile-lg:px-8
            mobile-md:px-6`}
        >
            <div
                role="presentation"
                className="flex flex-col gap-6
                desktop-sm:gap-4
                tablet-md:items-center tablet-md:justify-center tablet-md:gap-6 tablet-md:text-center
                mobile-lg:gap-4"
            >
                <h2
                    className="text-5xl text-huddle-very-dark-cyan
                    desktop-lg:text-[2.5rem]
                    desktop-md:text-4xl
                    desktop-sm:text-3xl
                    tablet-lg:text-2xl
                    tablet-md:text-4xl
                    tablet-sm:text-3xl
                    mobile-lg:text-2xl
                    mobile-md:text-xl"
                >
                    {title}
                </h2>
                <p
                    className="text-xl font-[400] text-huddle-grayish-blue
                    desktop-md:text-lg
                    desktop-sm:text-base
                    tablet-lg:text-sm
                    tablet-md:text-xl
                    tablet-sm:text-lg
                    mobile-lg:text-base
                    mobile-md:text-sm"
                >
                    {description}
                </p>
            </div>

            <img
                src={imageSrc}
                alt={imageAlt}
                className="aspect-[1.2/1] h-[30rem]
                desktop-md:h-[22rem]
                desktop-sm:h-[19rem]
                tablet-lg:h-[14rem]
                tablet-md:h-auto tablet-md:w-[30rem]
                tablet-sm:w-[25rem]"
            />
        </article>
    );
}
