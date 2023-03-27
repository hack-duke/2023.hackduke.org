import { useRouter } from "next/router";

import Navbar from "./Navbar";

export default function Home() {
    const router = useRouter();

    return (
        <>
            <Navbar />
            <div className="mt-[-5rem] h-[100vh] w-[100vw] bg-[url('/temp_mobile.svg')] bg-cover bg-center lg:h-[120vh] lg:bg-[url('/temp.svg')]"></div>
        </>
    );
}
