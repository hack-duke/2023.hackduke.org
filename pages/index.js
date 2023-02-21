import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();

    return (
        <>
            <div className="flex h-[5rem] w-[100%] items-center justify-center bg-[#121432] text-white">
                <a
                    className="m-[5%] flex h-[3rem] w-[30%] items-center justify-center  border-2 hover:cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.hackduke.org/">
                    Our Website
                </a>
                <a
                    className="m-[5%] flex h-[3rem] w-[30%] items-center justify-center border-2 hover:cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:sponsorship@hackduke.org">
                    Sponsor Us
                </a>
            </div>
            <div className="h-[100vh] w-[100vw] bg-[url('/temp_mobile.svg')] bg-cover bg-center lg:h-[120vh] lg:bg-[url('/temp.svg')]"></div>
        </>
    );
}
