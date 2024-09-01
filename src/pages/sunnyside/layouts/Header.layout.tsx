import { PropsWithChildren } from 'react';

export function Header({ children }: PropsWithChildren) {
    return (
        <header
            className="flex h-screen w-full flex-col gap-[10%] bg-[url('@/assets/sunnyside/images/desktop/image-header.jpg')] bg-cover bg-center bg-no-repeat
            mobile-lg:bg-[url('@/assets/sunnyside/images/mobile/image-header.jpg')]"
        >
            {children}
        </header>
    );
}
