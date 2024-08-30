import { useLayoutEffect, useEffect, useRef, MutableRefObject } from 'react';

export function useClickAway<TElement extends Element>(
    callback: (event: Event) => void
): MutableRefObject<TElement | null> {
    const elementRef = useRef<TElement | null>(null);
    const callbackRef = useRef(callback);

    useLayoutEffect(() => {
        callbackRef.current = callback;
    });

    useEffect(() => {
        const handleClick = (event: Event) => {
            const element = elementRef.current;
            if (element && event.target instanceof Node && !element.contains(event.target)) {
                callbackRef.current(event);
            }
        };

        document.addEventListener('mousedown', handleClick);
        document.addEventListener('touchstart', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
            document.removeEventListener('touchstart', handleClick);
        };
    }, []);

    return elementRef;
}
