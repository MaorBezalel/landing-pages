import { PropsWithChildren } from 'react';

export function Header({ children }: PropsWithChildren) {
    return (
        <header className="bg-huddle-image-hero-desktop bg-huddle-very-pale-cyan tablet-md:bg-huddle-image-hero-mobile flex w-full flex-col gap-20 bg-center bg-no-repeat py-10 tablet-md:gap-32 tablet-sm:gap-24 mobile-lg:gap-20 mobile-md:gap-16">
            {children}
        </header>
    );
}
