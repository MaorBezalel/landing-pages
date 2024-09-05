import illustrationLaptopDesktop from '@/assets/blogr/images/illustration-laptop-desktop.svg';
import illustrationLaptopMobile from '@/assets/blogr/images/illustration-laptop-mobile.svg';

export function FeaturesSection() {
    const subsections = [
        {
            title: 'Free, open, simple',
            description:
                'Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.',
            span: 'row-[1/2] col-[2/3]',
        },
        {
            title: 'Powerful tooling',
            description:
                'Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.',
            span: 'row-[2/3] col-[2/3]',
        },
    ];

    return (
        <section
            aria-label="Features"
            className="container relative mb-20 grid grid-cols-[1fr_1fr] grid-rows-[repeat(2,1fr)] gap-x-32 gap-y-20
            desktop-md:gap-x-10
            desktop-sm:gap-x-32
            tablet-lg:gap-x-10 tablet-lg:gap-y-10 
            tablet-md:mb-8 tablet-md:flex tablet-md:flex-col tablet-md:items-center tablet-md:justify-center"
        >
            {subsections.map((section, index) => (
                <section
                    key={index}
                    className={`flex flex-col gap-6 pe-48 ${section.span}
                    desktop-lg:pe-40
                    desktop-md:pe-8
                    tablet-lg:gap-4 tablet-lg:pe-0
                    tablet-md:order-1
                    tablet-md:items-center tablet-md:justify-center tablet-md:px-10 tablet-md:text-center
                    mobile-lg:px-6`}
                >
                    <h3
                        className="text-4xl font-[700] text-blogr-very-dark-blue
                        desktop-lg:text-3xl
                        tablet-lg:text-2xl
                        tablet-md:text-3xl"
                    >
                        {section.title}
                    </h3>
                    <p
                        className="text-lg text-blogr-very-dark-grayish-blue
                        desktop-lg:text-base
                        tablet-lg:text-sm"
                    >
                        {section.description}
                    </p>
                </section>
            ))}
            <img
                srcSet={`${illustrationLaptopMobile} 768w, ${illustrationLaptopDesktop} 1440w`}
                sizes="(max-width: 768px) 768px, (min-width: 769px) 1440px"
                src={illustrationLaptopDesktop}
                alt="Editor illustration"
                className="absolute end-[calc(50%-20rem)] top-[calc(50%-2rem)] col-[1/2] row-[1/3] min-w-[974px] -translate-y-1/2
                tablet-lg:end-[calc(50%-15rem)]
                tablet-md:static tablet-md:h-[498px] tablet-md:min-w-[359px] tablet-md:-translate-y-0
                tablet-sm:h-[350px]
                mobile-lg:h-[360px] mobile-lg:min-w-[500px]
                mobile-md:h-[320px] mobile-md:min-w-[450px]"
            />
        </section>
    );
}
