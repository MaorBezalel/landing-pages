export type PageHtmlData = ['sunnyside', 'loopstudios', 'blogr'][number];

export type PageTitle = ['Sunnyside agency landing page', 'Loopstudios landing page', 'Blogr landing page'][number];

export type PageConfig = {
    title: PageTitle | null;
    page: PageHtmlData | null;
};
