import { PropsWithChildren } from 'react';

export function Main({ children }: PropsWithChildren) {
    return <main className="flex w-full flex-col">{children}</main>;
}
