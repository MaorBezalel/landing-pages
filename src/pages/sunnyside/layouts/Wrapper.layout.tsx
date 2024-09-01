import { PropsWithChildren } from 'react';

export function Wrapper({ children }: PropsWithChildren) {
    return <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">{children}</div>;
}
