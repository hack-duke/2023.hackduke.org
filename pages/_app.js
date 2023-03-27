import "@/styles/globals.css";
import { Manrope } from "@next/font/google";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
});

export default function App({ Component, pageProps }) {
    return (
        <main className={`${manrope.variable} font-sans`}>
            <Component {...pageProps} />
        </main>
    );
}
