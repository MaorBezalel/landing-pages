import { PropsWithChildren } from 'react';

export function Main({ children }: PropsWithChildren) {
    return (
        <main
            className="container relative mb-40 flex flex-col gap-20
            tablet-md:grid tablet-md:grid-cols-[1fr] tablet-md:grid-rows-[repeat(3,1fr)] tablet-md:items-stretch"
        >
            {children}
        </main>
    );
}
