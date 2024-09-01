/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    mode: 'jit',
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
            },
            fontFamily: {
                /* Sunnyside Fonts */
                barlow: ['Barlow', 'sans-serif'],
                fraunces: ['Fraunces', 'serif'],

                /* Loopstudios Fonts */
                alata: ['Alata', 'sans-serif'],
                'josefin-sans': ['Josefin Sans', 'sans-serif'],
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
