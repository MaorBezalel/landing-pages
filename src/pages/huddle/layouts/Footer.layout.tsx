import { PropsWithChildren } from 'react';

export function Footer({ children }: PropsWithChildren) {
    return (
        <footer className="w-full bg-huddle-very-dark-cyan pb-20 pt-40">
            <div
                role="presentation"
                className="container grid grid-cols-[repeat(4,auto)] grid-rows-[auto_auto_auto] items-baseline justify-start gap-x-52 gap-y-10
                desktop-lg:gap-x-44
                desktop-md:gap-x-28
                desktop-sm:gap-x-20
                tablet-md:grid-cols-1 tablet-md:grid-rows-[repeat(5,auto)]"
            >
                {children}
            </div>
        </footer>
    );
}
