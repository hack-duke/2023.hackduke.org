import { useRouter } from "next/router";
import Stars from "../components/Stars";

function DateSign(props) {
    return (
        <>
            <div
                className="absolute"
                style={{
                    transform: `translate(${props.x}, ${props.y})`,
                    width: `${props.width}`,
                }}>
                <img className="w-full" src="/dates.svg"></img>

            </div>
        </>
    );
}

function AboutUsHeader(props) {
    return (
        <>
            <div
                className="absolute grid whitespace-nowrap text-[3.48vw] font-semibold text-white lg:text-[3.52vw]"
                style={{
                    transform: `translate(${props.x},calc(${props.y} + (100vw - 1200px)/100))`,
                    height: `${props.height}`,
                    width: `${props.width}`,
                }}>
                <div
                    className="absolute top-[46%] h-[26.5%] w-[66.7%] overflow-hidden lg:top-[38%]"
                    style={{ transform: `skew(0, -11.2deg)` }}>
                    <div className="animate-textLoop">
                        ABOUT US ABOUT US ABOUT US ABOUT US ABOUT US ABOUT US
                        ABOUT US
                    </div>
                </div>
                <div
                    className="absolute right-0 top-[32%] h-[26.5%] w-[33.4%] overflow-hidden lg:top-[24%]"
                    style={{
                        transform: `skew(0, 13.7deg)`,
                    }}>
                    <div
                        style={{
                            transform: `translateX(calc(-24.9% - (100vw - 1200px)/140))`,
                        }}>
                        <div className="animate-textLoop">
                            ABOUT US ABOUT US ABOUT US ABOUT
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function Home() {
    const router = useRouter();

    const parallaxParameters = {
        background: {
            scale: "11.4",
            x: "0",
            y: "-45vh",
            z: "-50px",
        },
        main_building: {
            scale: "1.7",
            x: "0",
            y: "-10vw",
            z: "-8px",
            text: {
                x: "80%",
                y: "310%",
                w: "35%",
                fontScale: "3vw",
                skewY: "-11deg",
            },
            dateSign: {
                x: "70.8vw",
                y: "8vw",
                w: "19%",
            },
            scrollingHeader: {
                x: "3.9vw",
                y: "65vw",
                h: "17vw",
                w: "92.9%",
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

    return (
        <>
            <div
                className="h-screen w-screen overflow-y-auto overflow-x-hidden"
                style={{ perspective: "5px" }}>
                {/* Background */}
                <div
                    className="absolute w-full max-w-none"
                    style={{
                        transform: `scale(${parallaxParameters.background.scale})
                                    translate3d(${parallaxParameters.background.x},
                                                ${parallaxParameters.background.y},
                                                ${parallaxParameters.background.z})`,
                    }}>
                    <Stars>
                        <img
                            className="fixed w-full"
                            src="/backgroundnostars.svg"></img>
                    </Stars>

                    <div className="absolute top-[-8vh] left-[-10vw] h-screen w-[125vw] scale-[70%] lg:left-[5vw] lg:top-[5vh] lg:scale-[100%]">
                        <img src="/moon.svg" className="" />
                    </div>
                    <div className="absolute top-[10rem] left-0 h-screen w-[125vw]">
                        <img src="/buildings.svg" className="" />
                    </div>
                    {/* <div className="absolute top-[30%] left-[40%] text-lg text-cyan-50"></div> */}
                </div>

                <div
                    className="absolute w-full max-w-none"
                    style={{
                        transform: `scale(${parallaxParameters.main_building.scale})
                                    translate3d(${parallaxParameters.main_building.x},
                                                ${parallaxParameters.main_building.y},
                                                ${parallaxParameters.main_building.z})`,
                    }}>
                    {/* Building SVG */}
                    <img
                        className="absolute w-full"
                        src="/main_building.svg"></img>

                    {/* Date Sign */}
                    <DateSign
                        x={parallaxParameters.main_building.dateSign.x}
                        y={parallaxParameters.main_building.dateSign.y}
                        width={
                            parallaxParameters.main_building.dateSign.w
                        }></DateSign>

                    {/* Main Text */}
                    <div
                        className="absolute whitespace-normal text-center leading-snug"
                        style={{
                            transform: `translate(${parallaxParameters.main_building.text.x}, calc(${parallaxParameters.main_building.text.y} + (100vw - 1200px)/100))
                                              skew(0, ${parallaxParameters.main_building.text.skewY})`,
                            fontSize: `${parallaxParameters.main_building.text.fontScale}`,
                            width: `${parallaxParameters.main_building.text.w}`,
                        }}>
                        <div>
                            Hackduke is a premier intercollegiate hackathon for
                            social good. Blah blah blah blah blahh blah blah
                        </div>
                        <br />
                        <a
                            href="https://hackduke.org/"
                            className="font-bold underline">
                            Learn More →
                        </a>
                    </div>

                    {/* Scrolling Header */}
                    <AboutUsHeader
                        x={parallaxParameters.main_building.scrollingHeader.x}
                        y={parallaxParameters.main_building.scrollingHeader.y}
                        height={
                            parallaxParameters.main_building.scrollingHeader.h
                        }
                        width={
                            parallaxParameters.main_building.scrollingHeader.w
                        }></AboutUsHeader>
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
                        className="absolute whitespace-normal bg-red-500 text-center"
                        style={{
                            transform: `translate(${parallaxParameters.billboard.text.x}, ${parallaxParameters.billboard.text.y})`,
                            fontSize: `${parallaxParameters.billboard.text.fontScale}`,
                            width: `${parallaxParameters.billboard.text.w}`,
                        }}>
                        <b>FAQ:</b>
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
