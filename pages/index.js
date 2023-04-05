import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();

    const parallaxParameters = {
        background: {
            scale: "11.4",
            x: "0",
            y: "-350px",
            z: "-50px",
        },
        main_building: {
            scale: "1.7",
            x: "0",
            y: "-10vw",
            z: "-8px",
            text: {
                x: "80%",
                y: "275%",
                w: "35%",
                fontScale: "3vw",
            },
        },
        billboard: {
            scale: "1",
            x: "-40%",
            y: "180vw",
            z: "-4px",
            text: {
                x: "13%",
                y: "130%",
                w: "75%",
                fontScale: "4vw",
            },
        },
        lower_highway: {
            scale: "1.1",
            x: "-20%",
            y: "280vw",
            z: "-2.2px",
        },
        upper_highway: {
            scale: "1.33",
            x: "0",
            y: "170vw",
            z: "-1.5px",
        },
        foreground_buildings: {
            scale: "1",
            x: "0",
            y: "350vw",
            z: "0",
        },
    };

    // stronger parallax
    return (
        <>
            <div
                className="h-screen w-screen overflow-y-auto overflow-x-hidden"
                style={{ perspective: "5px" }}>
                <div
                    className="absolute w-full max-w-none"
                    style={{
                        transform: `scale(${parallaxParameters.background.scale})
                                    translate3d(${parallaxParameters.background.x},
                                                ${parallaxParameters.background.y},
                                                ${parallaxParameters.background.z})`,
                    }}>
                    <img className="fixed w-full" src="/background.svg"></img>
                    <div className="absolute top-[30%] left-[40%] text-lg text-cyan-50"></div>
                </div>

                <div
                    className="absolute w-full max-w-none"
                    style={{
                        transform: `scale(${parallaxParameters.main_building.scale})
                                    translate3d(${parallaxParameters.main_building.x},
                                                ${parallaxParameters.main_building.y},
                                                ${parallaxParameters.main_building.z})`,
                    }}>
                    <img
                        className="absolute w-full"
                        src="/main_building.svg"></img>
                    <div
                        className="absolute whitespace-normal bg-red-500"
                        style={{
                            transform: `translate(${parallaxParameters.main_building.text.x}, ${parallaxParameters.main_building.text.y})
                                              matrix(0.98, -0.175, 0, 1, 0, 0)`,
                            fontSize: `${parallaxParameters.main_building.text.fontScale}`,
                            width: `${parallaxParameters.main_building.text.w}`,
                        }}>
                        ham burger ham burger ham burger ha m burger ham burger
                        ham burger ham burger ham burger hamb urger ham burger h
                        amburger ha mburger
                    </div>
                </div>

                <div
                    className="absolute w-full max-w-none"
                    style={{
                        transform: `scale(${parallaxParameters.billboard.scale})
                                    translate3d(${parallaxParameters.billboard.x},
                                                ${parallaxParameters.billboard.y},
                                                ${parallaxParameters.billboard.z})`,
                    }}>
                    <img className="absolute w-full" src="/billboard.svg"></img>
                    <div
                        className="absolute whitespace-normal bg-red-500"
                        style={{
                            transform: `translate(${parallaxParameters.billboard.text.x}, ${parallaxParameters.billboard.text.y})`,
                            fontSize: `${parallaxParameters.billboard.text.fontScale}`,
                            width: `${parallaxParameters.billboard.text.w}`,
                        }}>
                        ham burger ham burger ham burger ha m burger ham burger
                        ham burger ham burger ham burger hamb urger ham burger h
                        amburger ha mburger
                    </div>
                </div>

                <div
                    className="absolute w-full max-w-none"
                    style={{
                        transform: `scale(${parallaxParameters.lower_highway.scale})
                                    translate3d(${parallaxParameters.lower_highway.x},
                                                ${parallaxParameters.lower_highway.y},
                                                ${parallaxParameters.lower_highway.z})`,
                    }}>
                    <img
                        className="absolute w-full"
                        src="/lower_highway.svg"></img>
                </div>

                <div
                    className="absolute w-full max-w-none"
                    style={{
                        transform: `scale(${parallaxParameters.upper_highway.scale})
                                    translate3d(${parallaxParameters.upper_highway.x},
                                                ${parallaxParameters.upper_highway.y},
                                                ${parallaxParameters.upper_highway.z})`,
                    }}>
                    <img
                        className="absolute w-full"
                        src="/upper_highway.svg"></img>
                </div>

                <div
                    className="absolute w-full max-w-none"
                    style={{
                        transform: `scale(${parallaxParameters.foreground_buildings.scale})
                                    translate3d(${parallaxParameters.foreground_buildings.x},
                                                ${parallaxParameters.foreground_buildings.y},
                                                ${parallaxParameters.foreground_buildings.z})`,
                    }}>
                    <img
                        className="absolute w-full"
                        src="/foreground_buildings.svg"></img>
                </div>
            </div>
        </>
    );
}
