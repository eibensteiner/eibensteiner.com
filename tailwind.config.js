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
                '5.5': '1.375rem',
                '22': '5.5rem',
            },
            width: {
                '5.5': '1.375rem',
            },
            maxWidth: {
                '14': '3.5rem',
            },
            borderRadius: {
                inherit: 'inherit',
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
