/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundSize: {
                'size-200': '200% 200%',
            },
            backgroundPosition: {
                'pos-0': '0% 0%',
                'pos-100': '100% 100%',
            },
            container: {
                center: true,
                screens: {
                    'desktop-lg': '1681px',
                    'desktop-md': '1441px',
                    'desktop-sm': '1281px',
                    'tablet-lg': '1025px',
                    'tablet-md': '769px',
                    'tablet-sm': '641px',
                    'mobile-lg': '481px',
                    'mobile-md': '376px',
                    'mobile-sm': '321px',
                },
            },
            colors: {
                sunnyside: {
                    'soft-red': 'hsl(7, 99%, 70%)',
                    yellow: 'hsl(51, 100%, 49%)',
                    'dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
                    'light-blue': '#6fd0fa',
                    'dark-blue': 'hsl(198, 62%, 26%)',
                    'dark-moderate-cyan': 'hsl(168, 34%, 41%)',
                    'light-moderate-cyan': '#90D4C5',
                    'very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
                    'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
                    'dark-grayish-blue': 'hsl(232, 10%, 55%)',
                    'grayish-blue': 'hsl(210, 4%, 67%)',
                    white: 'hsl(0, 0%, 100%)',
                },
                loopstudios: {
                    white: 'hsl(0, 0%, 100%)',
                    black: 'hsl(0, 0%, 0%)',
                    'dark-gray': 'hsl(0, 0%, 55%)',
                    'very-dark-gray': 'hsl(0, 0%, 41%)',
                },
                blogr: {
                    'light-red': 'hsl(356, 100%, 66%)', // CTA text
                    'very-light-red': 'hsl(355, 100%, 74%)', // CTA hover background
                    'very-dark-blue': 'hsl(208, 49%, 24%)', // headings
                    white: 'hsl(0, 0%, 100%)', // text
                    'grayish-blue': 'hsl(240, 2%, 79%)', // footer text
                    'very-dark-grayish-blue': 'hsl(207, 13%, 34%)', // body copy
                    'very-dark-black-blue': 'hsl(240, 10%, 16%)', // footer background
                },
                huddle: {
                    pink: 'hsl(322, 100%, 66%)',
                    'very-pale-cyan': 'hsl(193, 100%, 96%)',
                    'very-dark-cyan': 'hsl(192, 100%, 9%)',
                    'grayish-blue': 'hsl(208, 11%, 55%)',
                },
            },
            backgroundImage: {
                /* ----------------------------------------------- Blogr ----------------------------------------------- */
                /* Gradients */
                'blogr-gradient-cta': 'linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))',
                'blogr-gradient-body': 'linear-gradient(to right, hsl(237, 17%, 21%), hsl(237, 23%, 32%))',

                /* Images */
                'blogr-image-pattern-intro-desktop':
                    "url('@/assets/blogr/images/bg-pattern-intro-desktop.svg'), linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
                'blogr-image-pattern-intro-mobile':
                    "url('@/assets/blogr/images/bg-pattern-intro-mobile.svg'), linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
                'blogr-image-pattern-services-cta':
                    'url(@/assets/blogr/images/bg-pattern-circles.svg), linear-gradient(135deg, hsl(237, 17%, 21%), hsl(237, 23%, 32%))',
                /* -------------------------------------------------------------------------------------------------------- */
            },
            fontFamily: {
                /* Sunnyside Fonts */
                barlow: ['Barlow', 'sans-serif'],
                fraunces: ['Fraunces', 'serif'],

                /* Loopstudios Fonts */
                alata: ['Alata', 'sans-serif'],
                'josefin-sans': ['Josefin Sans', 'sans-serif'],

                /* Blogr Fonts */
                overpass: ['Overpass', 'sans-serif'],
                ubuntu: ['Ubuntu', 'sans-serif'],

                /* Huddle Fonts */
                poppins: ['Poppins', 'sans-serif'],
                'open-sans': ['Open Sans', 'sans-serif'],
            },
        },
        screens: {
            // a "desktop-first" approach (larger screens first and smaller screens later)
            'desktop-lg': { max: '1680px' },
            'desktop-md': { max: '1440px' },
            'desktop-sm': { max: '1280px' },
            'tablet-lg': { max: '1024px' },
            'tablet-md': { max: '768px' },
            'tablet-sm': { max: '640px' },
            'mobile-lg': { max: '480px' },
            'mobile-md': { max: '375px' },
            'mobile-sm': { max: '320px' },
        },
    },
    plugins: [],
};
