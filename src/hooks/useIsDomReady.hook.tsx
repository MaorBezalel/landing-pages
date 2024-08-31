import { useState, useEffect } from 'react';

export function useIsDomReady() {
    const [isDomReady, setIsDomReady] = useState(false);

    useEffect(() => {
        setIsDomReady(true);
    }, []);

    return isDomReady;
}
