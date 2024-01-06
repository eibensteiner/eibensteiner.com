module.exports = {
    content: [
        './components/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.js',
        './nuxt.config.js',
    ],
    purge: {
        content: [
            './components/**/*.vue',
            './pages/**/*.vue',
            './plugins/**/*.js',
            'nuxt.config.js'
        ],
    },
    theme: {
        extend: {
            height: {
                '4-em': '1em',
                '5.5': '1.375rem',
                '22': '5.5rem',
            },
            width: {
                '4-em': '1em',
                '5.5': '1.375rem',
            },
            margin: {
                '1-em': '0.25em',
                '2-em': '0.5em',
                '3-em': '0.75em',
                '4-em': '1em',
                '5-em': '1.25em',
                '6-em': '1.5em',
                '8-em': '2em',
            },
            padding: {
                '4-em': '1em',
            },
            maxWidth: {
                '14': '3.5rem',
            },
            borderRadius: {
                inherit: 'inherit',
                'md-em': '0.375em',
            },
            fontFamily: {
                sans: ['Inter var', 'ui-sans-serif', 'system-ui'],
            },
            fontWeight: {
                '450': 450,
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                }
            },
            animation: {
                'fade-in': 'fade-in .6s forwards',
            },
            dropShadow: {
                '2xl': '0 20px 30px rgb(0 0 0 / 0.10)'
            }
        },
    },
}