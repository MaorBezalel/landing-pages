import { DescriptiveFeatureCard, ImageFeatureCard, DescriptiveImageFeatureCard } from '@/pages/sunnyside/components/ui';

export function FeaturesSection() {
    return (
        <section
            id="features"
            className="grid h-full w-full grid-cols-2 grid-rows-3 gap-0
            tablet-sm:grid-cols-1 tablet-sm:grid-rows-6"
        >
            <DescriptiveFeatureCard
                order="order-[0]"
                mobileOrder="tablet-sm:order-[1]"
                title="Transform your brand"
                description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
                ctaText="Learn More"
                ctaColor="yellow"
            />
            <ImageFeatureCard
                order="order-[1]"
                mobileOrder="tablet-sm:order-[0]"
                image="transform"
            />
            <ImageFeatureCard
                order="order-[2]"
                image="stand-out"
            />
            <DescriptiveFeatureCard
                order="order-[3]"
                title="Stand out to the right audience"
                description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
                ctaText="Learn More"
                ctaColor="soft-red"
            />
            <DescriptiveImageFeatureCard
                order="order-[4]"
                image="graphic-design"
                title="Graphic Design"
                description={`Great design makes you memorable. We deliver${'\n'}artwork that underscores your brand message${'\n'}and captures potential clients' attention.`}
            />
            <DescriptiveImageFeatureCard
                order="order-[5]"
                image="photography"
                title="Photography"
                description={`Increase your credibility by getting the most${'\n'}stunning, high-quality photos that improve your${'\n'}business image.`}
            />
        </section>
    );
}
