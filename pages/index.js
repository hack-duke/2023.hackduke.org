import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();

    return (
        <>
            <div className="">
                <img className="absolute top-[0%] w-[100%]" src="/bg.svg"></img>
                <img
                    className="absolute top-[15%] left-[20%] w-[60%]"
                    src="/b1.svg"></img>
                <img
                    className="absolute top-[200%] left-[10%] w-[40%]"
                    src="/bb.svg"></img>

                {/* <div className="absolute top-0 left-0 h-[100%] w-[100%] bg-black bg-opacity-50"></div> */}
            </div>
        </>
    );
}
