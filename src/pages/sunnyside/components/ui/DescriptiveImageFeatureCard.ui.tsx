type DescriptiveImageFeatureCardProps = {
    order: number;
    image: 'graphic-design' | 'photography';
    title: string;
    description: string;
};

export function DescriptiveImageFeatureCard({ order, image, title, description }: DescriptiveImageFeatureCardProps) {
    return (
        <div
            className={`order-${order} flex h-[600px] w-full flex-col items-center justify-end gap-10 bg-[url('@/assets/sunnyside/images/image-${image}.jpg')] bg-cover bg-center bg-no-repeat py-12 text-center
            desktop-sm:h-[500px]
            tablet-lg:h-[400px] tablet-lg:gap-4 tablet-lg:py-6`}
        >
            <h2
                className="font-fraunces text-5xl font-[900] text-sunnyside-dark-desaturated-cyan
                desktop-lg:text-5xl
                desktop-md:text-4xl
                tablet-lg:text-3xl"
            >
                {title}
            </h2>
            <pre
                className="font-barlow text-xl text-sunnyside-dark-desaturated-cyan
                desktop-md:text-lg
                tablet-md:text-[0.9rem]
                tablet-sm:text-base"
            >
                {description}
            </pre>
        </div>
    );
}
