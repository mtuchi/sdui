module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    plugins: [
        require('@tailwindcss/forms')
    ],
}