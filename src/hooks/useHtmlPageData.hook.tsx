import { useLayoutEffect } from 'react';
import { PageHtmlData } from '@/types';

/**
 * A custom hook that sets the HTML page data for the current page.
 *
 * @param page The value to set the html `data-page` attribute or null to remove it.
 */
export function useHtmlPageData(page: PageHtmlData | null) {
    useLayoutEffect(() => {
        if (page) {
            document.documentElement.dataset.page = page;
        } else {
            delete document.documentElement.dataset.page;
        }
    }, [page]);
}
