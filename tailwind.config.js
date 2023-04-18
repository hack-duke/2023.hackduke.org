/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                arrowLoopKeys: {
                    '0%' : { top : '-45%' },
                    '100%' : { top : '3%' },
                },
                textLoopKeys: {
                    '0%' : { transform : 'translateX(-17.8vw)' },
                    '100%' : { transform : 'translateX(0vw)' },
                },
            },
            animation: {
                'arrowSignLoop': 'arrowLoopKeys 2s linear infinite',
                'textLoop' : 'textLoopKeys 10s linear infinite',
            },
        },
    },
    plugins: [],
};
