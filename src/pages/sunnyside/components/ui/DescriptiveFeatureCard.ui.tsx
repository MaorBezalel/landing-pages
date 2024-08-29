import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';

type DescriptiveFeatureCardProps = {
    order: number;
    mobileOrder?: number;
    title: string;
    description: string;
    ctaText: string;
    ctaColor: 'yellow' | 'soft-red';
};

export function DescriptiveFeatureCard({
    order,
    mobileOrder,
    title,
    description,
    ctaText,
    ctaColor,
}: DescriptiveFeatureCardProps) {
    return (
        <div
            className={`order-${order} flex h-[600px] w-full flex-col justify-center gap-10 bg-sunnyside-white px-40
            desktop-md:px-32
            desktop-sm:h-[500px] desktop-sm:px-24
            tablet-lg:h-[400px] tablet-lg:px-16 
            tablet-md:gap-5
            tablet-sm:items-center tablet-sm:px-16 tablet-sm:text-center ${mobileOrder !== undefined ? `tablet-sm:order-${mobileOrder}` : ''}
            mobile-lg:gap-6 mobile-lg:px-8`}
        >
            <h2
                className="font-fraunces text-5xl font-[900] text-sunnyside-very-dark-desaturated-blue
                desktop-lg:text-5xl
                desktop-md:text-3xl
                tablet-md:text-2xl
                tablet-sm:text-4xl"
            >
                {title}
            </h2>
            <p
                className="text-xl text-sunnyside-dark-grayish-blue
                desktop-md:text-lg
                tablet-md:text-base
                tablet-sm:text-lg"
            >
                {description}
            </p>
            <Link
                to={ROUTES.SUNNY_SIDE}
                className={`font-fraunces font-extrabold uppercase text-sunnyside-very-dark-desaturated-blue underline decoration-sunnyside-${ctaColor}/30 decoration-8 underline-offset-1 transition-colors duration-200 hover:decoration-sunnyside-${ctaColor}
                tablet-md:text-base
                tablet-sm:text-lg`}
            >
                {ctaText}
            </Link>
        </div>
    );
}
