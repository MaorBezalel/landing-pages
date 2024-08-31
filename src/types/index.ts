export type PageHtmlData = ['sunnyside', 'loopstudios'][number];

export type PageTitle = ['Sunnyside agency landing page', 'Loopstudios landing page'][number];

export type PageConfig = {
    title: PageTitle | null;
    page: PageHtmlData | null;
};
