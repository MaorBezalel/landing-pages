import { PropsWithChildren } from 'react';

export function Header({ children }: PropsWithChildren) {
    return (
        <header
            className="w-full bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('@/assets/loopstudios/images/desktop/image-hero.jpg')] bg-cover bg-[top_center] bg-no-repeat
            tablet-md:bg-[url('@/assets/loopstudios/images/mobile/image-hero.jpg')]"
        >
            <div
                className="container-highlight container flex flex-col gap-32 px-2 pb-32 pt-10
                tablet-md:gap-60
                tablet-sm:gap-52 tablet-sm:pt-6
                mobile-lg:min-h-[100dvh] mobile-lg:gap-40
                mobile-md:gap-32 mobile-md:px-0"
            >
                {children}
            </div>
        </header>
    );
}
