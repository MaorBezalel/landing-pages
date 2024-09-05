import { PropsWithChildren } from 'react';

export function Footer({ children }: PropsWithChildren) {
    return (
        <footer className="w-full rounded-se-[80px] bg-blogr-very-dark-black-blue py-16">
            <div
                role="presentation"
                className="container grid grid-cols-[repeat(4,1fr)]
                tablet-md:grid-cols-[auto] tablet-md:grid-rows-[repeat(4,auto)] tablet-md:place-content-center tablet-md:gap-y-14 tablet-md:text-center"
            >
                {children}
            </div>
        </footer>
    );
}
