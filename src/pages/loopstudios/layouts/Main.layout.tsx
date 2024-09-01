import { PropsWithChildren } from 'react';

export function Main({ children }: PropsWithChildren) {
    return <main className="my-20 flex w-full flex-col gap-20">{children}</main>;
}
