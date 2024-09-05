import { PropsWithChildren } from 'react';

export function Header({ children }: PropsWithChildren) {
    return (
        <header
            className="relative w-full rounded-es-[80px] bg-blogr-image-pattern-intro-desktop bg-auto bg-[25%_50%] bg-no-repeat
            tablet-md:bg-blogr-image-pattern-intro-mobile tablet-md:bg-[35%_35%]"
        >
            <div className="container relative z-10 flex h-[70dvh] flex-col py-8">{children}</div>
        </header>
    );
}
