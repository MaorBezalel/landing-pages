import { PropsWithChildren } from 'react';

export function Main({ children }: PropsWithChildren) {
    return <main className="my-32 flex w-full flex-col gap-32">{children}</main>;
}
