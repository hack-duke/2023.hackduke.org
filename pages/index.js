import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    
    // stronger parallax
    return (
        <>
            <div className="h-screen overflow-x-hidden overflow-y-auto" style={{perspective: "5px"}}>
                <img
                    className="absolute top-[-500%] left-[-518%] w-[1100vw] max-w-none"
                    style={{transform: "translateZ(-50px)"}}
                    src="/background.svg"></img>
                <img
                    className="absolute top-[-15rem] left-[-33%] w-[170%] max-w-none"
                    style={{transform: "translateZ(-8px)"}}
                    src="/main_building.svg"></img>
                <img
                    className="absolute top-[180vw] left-[-40%] w-[100%]"
                    style={{transform: "translateZ(-4px)"}}
                    src="/billboard.svg"></img>
                
                <img
                    className="absolute top-[310vw] left-[-30%] w-[100%] max-w-none"
                    style={{transform: "translateZ(-2.5px)"}}
                    src="/lower_highway.svg"></img>
                <img
                    className="absolute top-[220vw] left-[-16%] w-[133%] max-w-none"
                    style={{transform: "translateZ(-1.5px)"}}
                    src="/upper_highway.svg"></img>

                <img
                    className="absolute top-[340vw] w-screen"
                    style={{transform: "translateZ(0)"}}
                    src="/foreground_buildings.svg"></img>
                
            </div>
        </>
    );


    // weaker parallax
    /*
    return (
        <>
            <div className="h-screen overflow-x-hidden overflow-y-auto" style={{perspective: "10px"}}>
                <img
                    className="absolute top-[-250%] left-[-260%] w-[600vw] max-w-none"
                    style={{transform: "translateZ(-50px)"}}
                    src="/background.svg"></img>
                <img
                    className="absolute top-[-10rem] left-[0%] w-[100%] max-w-none"
                    style={{transform: "translateZ(-8px)"}}
                    src="/main_building.svg"></img>
                <img
                    className="absolute top-[95vw] left-[-15%] w-[75%]"
                    style={{transform: "translateZ(-4px)"}}
                    src="/billboard.svg"></img>
                
                <img
                    className="absolute top-[190vw] left-[-20%] w-[100%] max-w-none"
                    style={{transform: "translateZ(-2.5px)"}}
                    src="/lower_highway.svg"></img>
                <img
                    className="absolute top-[115vw] left-[-8%] w-[116%] max-w-none"
                    style={{transform: "translateZ(-1.5px)"}}
                    src="/upper_highway.svg"></img>

                <img
                    className="absolute top-[220vw] w-screen"
                    style={{transform: "translateZ(0)"}}
                    src="/foreground_buildings.svg"></img>
                
            </div>
        </>
    );*/
}
