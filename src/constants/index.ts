export const ROUTES = {
    HOME: '/',
    SUNNYSIDE: '/sunnyside',
    LOOPSTUDIOS: '/loopstudios',
    BLOGR: '/blogr',
    HUDDLE: '/huddle',
} as const;

export const LANDING_PAGES = [
    {
        name: 'Sunny Side',
        url: ROUTES.SUNNYSIDE,
        className: 'text-2xl hover:text-blue-600',
    },
    {
        name: 'Loopstudios',
        url: ROUTES.LOOPSTUDIOS,
        className: 'text-2xl hover:text-blue-600',
    },
    {
        name: 'Blogr',
        url: ROUTES.BLOGR,
        className: 'text-2xl hover:text-blue-600',
    },
    {
        name: 'Huddle',
        url: ROUTES.HUDDLE,
        className: 'text-2xl hover:text-blue-600',
    },
    {
        name: 'Easybank',
        url: 'https://maorbezalel.github.io/easybank-landing-page/',
        className: 'text-2xl hover:text-blue-600',
    },
    {
        name: 'Shortly',
        url: 'https://maorbezalel.github.io/url-shortening-api-landing-page/',
        className: 'text-2xl hover:text-blue-600',
    },
];
