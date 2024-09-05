import { PropsWithChildren } from 'react';

export function Main({ children }: PropsWithChildren) {
    return <main className="mb-20 tablet-md:mb-0">{children}</main>;
}
