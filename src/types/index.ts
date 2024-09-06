export type PageHtmlData = ['sunnyside', 'loopstudios', 'blogr', 'huddle'][number];

export type PageTitle = [
    'Sunnyside agency landing page',
    'Loopstudios landing page',
    'Blogr landing page',
    'Huddle landing page',
][number];

export type PageConfig = {
    title: PageTitle | null;
    page: PageHtmlData | null;
};
