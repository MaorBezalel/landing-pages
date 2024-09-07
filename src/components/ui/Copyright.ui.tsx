import { ComponentProps } from 'react';

type CopyrightProps = ComponentProps<'p'>;

export function Copyright({ children, ...props }: CopyrightProps) {
    return (
        <p
            id="copyright"
            itemType="https://schema.org/Copyright"
            {...props}
        >
            &copy; {children}
        </p>
    );
}
