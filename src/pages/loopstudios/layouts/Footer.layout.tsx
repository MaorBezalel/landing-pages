import { PropsWithChildren } from 'react';

export function Footer({ children }: PropsWithChildren) {
    return (
        <footer className="w-full bg-loopstudios-black">
            <div
                className="container grid grid-cols-2 grid-rows-2 items-center justify-between gap-y-4 px-2 py-10
                tablet-md:grid-cols-1 tablet-md:grid-rows-[repeat(4,min-content)] tablet-md:place-items-center tablet-md:justify-center tablet-md:gap-x-0"
            >
                {children}
            </div>
        </footer>
    );
}
