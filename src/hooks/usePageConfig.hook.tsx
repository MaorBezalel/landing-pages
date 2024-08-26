import { useDocumentTitle, useHtmlPageData } from '@/hooks';
import { PageConfig } from '@/types';
/**
 * A custom hook that manages all page related configurations.
 *
 * @param config The page configuration to use.
 */
export function usePageConfig(config: PageConfig) {
    useDocumentTitle(config.title);
    useHtmlPageData(config.page);
}
