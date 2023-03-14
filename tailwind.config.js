module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            height: {
                22: '5.5rem',
            },
            boxShadow: {
                inner: 'inset 0px -1.5px 1.5px 0px hsla(0, 0%, 0%, 0.04), 0px 1.5px 1.5px 0px hsla(0, 0%, 100%, 0.04)',
            },
            borderRadius: {
                inherit: 'inherit',
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
        },
    },
    plugins: [],
}
