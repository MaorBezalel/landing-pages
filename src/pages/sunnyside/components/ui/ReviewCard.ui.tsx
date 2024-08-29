type ReviewCardProps = {
    profileSrc: string;
    content: string;
    authorName: string;
    authorTitle: string;
};

export function ReviewCard({ profileSrc, content, authorName, authorTitle }: ReviewCardProps) {
    return (
        <article
            className="grid grid-rows-subgrid gap-y-12 text-center [grid-row:1/4]
            tablet-sm:row-span-1 tablet-sm:grid-cols-subgrid tablet-sm:grid-rows-none tablet-sm:gap-y-6"
        >
            <img
                className="size-28 justify-self-center rounded-full
                desktop-lg:size-24
                desktop-md:size-20
                tablet-lg:size-16
                tablet-md:size-14
                tablet-sm:size-20"
                src={profileSrc}
                alt={`${authorName}'s profile`}
            />
            <p
                className="text-xl text-sunnyside-very-dark-grayish-blue
                desktop-lg:text-lg
                desktop-sm:text-base
                tablet-lg:text-sm
                tablet-md:text-xs
                tablet-sm:text-lg"
            >
                {content}
            </p>
            <address
                className="flex flex-col items-center justify-center gap-2 not-italic
                tablet-sm:gap-0"
            >
                <h4
                    className="font-fraunces text-xl font-[900] text-sunnyside-very-dark-desaturated-blue
                    desktop-md:text-lg
                    tablet-lg:text-base
                    tablet-md:text-sm
                    tablet-sm:text-lg"
                >
                    {authorName}
                </h4>
                <p
                    className="text-sunnyside-grayish-blue
                    desktop-lg:text-base
                    desktop-md:text-sm
                    tablet-lg:text-xs
                    tablet-sm:text-base"
                >
                    {authorTitle}
                </p>
            </address>
        </article>
    );
}
