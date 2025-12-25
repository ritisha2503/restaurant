/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
        fontFamily: {
            serif: ['"Playfair Display"', 'serif'],
            sans: ['Inter', 'sans-serif'],
        },
        colors: {
            darkblack: '#0B0A0E',
            darkblue: '#1A1729',
            softwhite: '#F5F5F7',
            softgray: '#B8B7C2',
            mutedgray: '#8E8CA0',
            accent: '#D6A35A',
        },
        },
    },
    plugins: [],
};
