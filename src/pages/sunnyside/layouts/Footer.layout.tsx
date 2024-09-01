import { PropsWithChildren } from 'react';

export function Footer({ children }: PropsWithChildren) {
    return (
        <footer className="flex flex-col items-center justify-center gap-20 bg-sunnyside-light-moderate-cyan py-20 text-center">
            {children}
        </footer>
    );
}
