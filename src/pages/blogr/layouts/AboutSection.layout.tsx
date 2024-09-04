import illustrationEditorDesktop from '@/assets/blogr/images/illustration-editor-desktop.svg';
import illustrationEditorMobile from '@/assets/blogr/images/illustration-editor-mobile.svg';

export function AboutSection() {
    const subsections = [
        {
            title: 'Introducing an extensible editor',
            description:
                'Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.',
            span: 'row-[1/2] col-[1/2]',
        },
        {
            title: 'Robust content management',
            description:
                'Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.',
            span: 'row-[2/3] col-[1/2]',
        },
    ];

    return (
        <section
            className="container relative flex flex-col gap-32
            tablet-lg:gap-20
            tablet-md:gap-10"
        >
            <h2
                className="text-center text-6xl font-[700] text-blogr-very-dark-blue
                desktop-lg:text-5xl
                desktop-md:text-4xl
                tablet-sm:text-3xl
                mobile-lg:text-2xl"
            >
                Designed for the future
            </h2>

            <div
                className="grid grid-cols-[1fr_1fr] grid-rows-[repeat(2,1fr)] gap-x-32
                gap-y-20
                desktop-md:gap-x-60
                desktop-sm:gap-x-32 tablet-lg:gap-x-10
                tablet-lg:gap-y-10 
                tablet-md:flex tablet-md:flex-col tablet-md:items-center tablet-md:justify-center"
            >
                {subsections.map((section, index) => (
                    <section
                        key={index}
                        className={`flex flex-col gap-6 ${section.span}
                        tablet-lg:gap-4
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
                    srcSet={`${illustrationEditorMobile} 768w, ${illustrationEditorDesktop} 1440w`}
                    sizes="(max-width: 768px) 768px, (min-width: 769px) 1440px"
                    src={illustrationEditorDesktop}
                    alt="Editor illustration"
                    className="absolute start-[calc(50%+12rem)] top-[calc(50%+3rem)] col-[2/3] row-[1/3] -translate-y-1/2
                    desktop-lg:start-[calc(50%+10rem)] 
                    desktop-md:start-[calc(50%+3rem)] desktop-md:top-[calc(50%+3.5rem)]
                    tablet-md:static tablet-md:h-[331px] tablet-md:w-[406px] tablet-md:-translate-y-0
                    mobile-lg:h-[305px] mobile-lg:w-full
                    mobile-md:h-[245px] mobile-md:w-full"
                />
            </div>
        </section>
    );
}
