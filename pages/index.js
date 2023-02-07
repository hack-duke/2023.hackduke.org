import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();

    return (
        <>
            <div className="w-[100%] h-[5rem] flex items-center justify-center bg-[#121432] text-white">
                <a
                    className="w-[30%] h-[3rem] m-[5%] flex items-center justify-center  border-2 hover:cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.hackduke.org/">
                    Our Website
                </a>
                <a
                    className="w-[30%] h-[3rem] m-[5%] flex items-center justify-center border-2 hover:cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:sponsorship@hackduke.org">
                    Sponsor Us
                </a>
            </div>
            <div className="bg-[url('/temp_mobile.svg')] lg:bg-[url('/temp.svg')] w-[100vw] h-[100vh] lg:h-[120vh] bg-center bg-cover"></div>
        </>
    );
}
