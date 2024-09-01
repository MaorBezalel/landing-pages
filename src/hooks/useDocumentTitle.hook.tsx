import { useEffect } from 'react';
import { PageTitle } from '@/types';

/**
 * A custom hook that sets the document title.
 *
 * @param title The title to set or null to reset it to the default.
 */
export function useDocumentTitle(title: PageTitle | null) {
    useEffect(() => {
        if (title) {
            document.title = title;
        } else {
            document.title = 'Landing Pages Portfolio - Maor Bezalel';
        }
    }, [title]);
}
