type WrapperProps = React.ComponentProps<'div'>;

export function Wrapper({ className, children, ...props }: WrapperProps) {
    return (
        <div
            className={className ?? 'grid min-h-[100dvh] grid-rows-[auto_1fr_auto]'}
            {...props}
        >
            {children}
        </div>
    );
}
