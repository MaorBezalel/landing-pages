import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';

type DescriptiveFeatureCardProps = {
    order: `order-[${number}]`;
    mobileOrder?: `tablet-sm:order-[${number}]`;
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
    const ctaColorMap = {
        yellow: {
            regular: 'decoration-sunnyside-yellow/30',
            hover: 'hover:decoration-sunnyside-yellow',
        },
        'soft-red': {
            regular: 'decoration-sunnyside-soft-red/30',
            hover: 'hover:decoration-sunnyside-soft-red',
        },
    };

    return (
        <div
            className={`${order} flex h-[600px] w-full flex-col justify-center gap-10 bg-sunnyside-white px-40
            desktop-md:px-32
            desktop-sm:h-[500px] desktop-sm:px-24
            tablet-lg:h-[400px] tablet-lg:px-16 
            tablet-md:gap-5
            tablet-sm:items-center tablet-sm:px-16 tablet-sm:text-center ${mobileOrder !== undefined ? mobileOrder : ''}
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
                to={ROUTES.SUNNYSIDE}
                className={`font-fraunces font-extrabold uppercase text-sunnyside-very-dark-desaturated-blue underline ${ctaColorMap[ctaColor].regular} decoration-8 underline-offset-1 transition-colors duration-200 ${ctaColorMap[ctaColor].hover}
                tablet-md:text-base
                tablet-sm:text-lg`}
            >
                {ctaText}
            </Link>
        </div>
    );
}
