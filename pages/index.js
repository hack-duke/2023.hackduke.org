import { useState, useEffect } from "react";
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
                        ABOUT US ABOUT US ABOUT US ABOUT US ABOUT US ABOUT US ABOUT US
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
                        <div className="animate-textLoop">ABOUT US ABOUT US ABOUT US ABOUT</div>
                    </div>
                </div>
            </div>
        </>
    );
}

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
            x: "60%",
            y: "325%",
            w: "40%",
            fontScale: "2.5vw",
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
            y: "65%",
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
        speaker_billboard: {
            x: "23.5%",
            y: "21.2%",
            w: "83.5%",
            h: "53%",
            skewY: "0",
            name: {
                x: "12%",
                y: "-920%",
                w: "70%",
                fontScale: "7vw",
                skewY: "-11deg",
            },
            title: {
                x: "6.7vw",
                y: "-94vw",
                w: "34vw",
                h: "18vw",
                fontScale: "3.0vw",
                skewY: "-11deg",
            },
            talk: {
                x: "6.7vw",
                y: "-92vw",
                w: "32vw",
                h: "11vw",
                fontScale: "3.5vw",
                skewY: "-11deg",
            },
            pic: {
                x: "126%",
                y: "-163%",
                h: "40%",
                w: "39%",
                skewY: "-11deg",
            },
            right_arrow: {
                x: "73vw",
                y: "-94.5vw",
                h: "5%",
                w: "5%",
                skewY: "-5deg",
            },
            left_arrow: {
                x: "6vw",
                y: "-84vw",
                h: "5.1%",
                w: "5.1%",
                skewY: "-4deg",
            },
        },
    },
};

function Speaker({ speaker }) {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <div
                className="overflow-hidden rounded-full"
                style={{
                    transform: `translate(${parallaxParameters.foreground_buildings.speaker_billboard.pic.x}, calc(${parallaxParameters.foreground_buildings.speaker_billboard.pic.y} + (100vw - 1200px)/100 - (${windowWidth}px - 1100px)/100))
                                    skew(0, ${parallaxParameters.foreground_buildings.speaker_billboard.pic.skewY})`,
                    height: `${parallaxParameters.foreground_buildings.speaker_billboard.pic.h}`,
                    width: `${parallaxParameters.foreground_buildings.speaker_billboard.pic.w}`,
                }}>
                <img src={speaker.pic} alt={speaker.name} className="h-full w-full" />
            </div>
            <div
                className="font-semibold text-[#4A181D]"
                style={{
                    transform: `translate(${parallaxParameters.foreground_buildings.speaker_billboard.name.x}, calc(${parallaxParameters.foreground_buildings.speaker_billboard.name.y} + (100vw - 1200px)/100 - (${windowWidth}px - 1100px)/100))
                                        skew(0, ${parallaxParameters.foreground_buildings.speaker_billboard.name.skewY})`,
                    fontSize: `${parallaxParameters.foreground_buildings.speaker_billboard.name.fontScale}`,
                    width: `${parallaxParameters.foreground_buildings.speaker_billboard.name.w}`,
                }}>
                {speaker.name}
            </div>
            <div
                className="flex items-center"
                style={{
                    transform: `translate(${parallaxParameters.foreground_buildings.speaker_billboard.title.x}, calc(${parallaxParameters.foreground_buildings.speaker_billboard.title.y} + (100vw - 1200px)/100 - (${windowWidth}px - 1200px)/100))
                                        skew(0, ${parallaxParameters.foreground_buildings.speaker_billboard.title.skewY})`,
                    height: `${parallaxParameters.foreground_buildings.speaker_billboard.title.h}`,
                    fontSize: `${parallaxParameters.foreground_buildings.speaker_billboard.title.fontScale}`,
                    width: `${parallaxParameters.foreground_buildings.speaker_billboard.title.w}`,
                }}>
                <p className=" font-semibold text-[#A5706F] ">{speaker.title}</p>
            </div>
            <div
                className="font-semibold text-[#4A181D]"
                style={{
                    transform: `translate(${parallaxParameters.foreground_buildings.speaker_billboard.talk.x}, calc(${parallaxParameters.foreground_buildings.speaker_billboard.talk.y} + (100vw - 1200px)/100 - (${windowWidth}px - 1200px)/100))
                                        skew(0, ${parallaxParameters.foreground_buildings.speaker_billboard.talk.skewY})`,
                    height: `${parallaxParameters.foreground_buildings.speaker_billboard.talk.h}`,
                    fontSize: `${parallaxParameters.foreground_buildings.speaker_billboard.talk.fontScale}`,
                    width: `${parallaxParameters.foreground_buildings.speaker_billboard.talk.w}`,
                }}>
                {speaker.talk}
            </div>
        </>
    );
}

export default function Home() {
    const router = useRouter();
    const [currentSpeakerIndex, setCurrentSpeakerIndex] = useState(0);

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const speakers = [
        {
            name: "Yunha Kim",
            pic: "/speakers/yunha.jpeg",
            title: "Founder & CEO @ Sleep Reset",
            talk: "Opening Ceremony Speaker",
        },
        {
            name: "Sherard Griffin",
            pic: "/speakers/sherard.jpeg",
            title: "Sr. Director of Engineering, AI services @ Red Hat",
            talk: "Closing Ceremony Speaker",
        },
        {
            name: "Alfredo Deza",
            pic: "/speakers/alfredo.jpeg",
            title: "Principal Cloud Advocate @ Microsoft",
            talk: "Workshop: Github Copilot",
        },
        {
            name: "Sanjay Kamlani",
            pic: "/speakers/sanjay.jpeg",
            title: "Founder & CEO @ Maker5",
            talk: "Saturday Speaker: Startup Talk",
        },
    ];

    return (
        <>
            <div className="fixed right-[50px] z-10 w-[10%] min-w-[60px] hover:cursor-pointer">
                <a
                    className=""
                    id="mlh-trust-badge"
                    href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
                    target="_blank">
                    <img
                        src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
                        alt="Major League Hacking 2024 Hackathon Season"
                    />
                </a>
            </div>
            <div className="h-screen w-screen overflow-y-auto overflow-x-hidden" style={{ perspective: "5px" }}>
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
                        <img className="fixed w-full" src="/backgroundnostars.svg"></img>
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
                    <img className="absolute w-full" src="/main_building.svg"></img>

                    {/* Date Sign */}
                    <DateSign
                        x={parallaxParameters.main_building.dateSign.x}
                        y={parallaxParameters.main_building.dateSign.y}
                        width={parallaxParameters.main_building.dateSign.w}></DateSign>

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
                            Hackduke is the premier intercollegiate hackathon for social good. We unite passionate
                            students to create meaningful solutions for social impact.
                        </div>
                        <br />
                        <a
                            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                            rel="noreferrer noopener"
                            target="_blank"
                            className="font-bold underline">
                            MLH Code of Conduct
                        </a>
                    </div>

                    {/* Scrolling Header */}
                    <AboutUsHeader
                        x={parallaxParameters.main_building.scrollingHeader.x}
                        y={parallaxParameters.main_building.scrollingHeader.y}
                        height={parallaxParameters.main_building.scrollingHeader.h}
                        width={parallaxParameters.main_building.scrollingHeader.w}></AboutUsHeader>
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
                        className="font-manrope max-width-[20%] absolute whitespace-normal text-center"
                        style={{
                            transform: `translate(${parallaxParameters.billboard.text.x}, ${parallaxParameters.billboard.text.y})`,
                            fontSize: `${parallaxParameters.billboard.text.fontScale}`,
                            width: `${parallaxParameters.billboard.text.w}`,
                        }}>
                        <div className="space-y-8">
                            <div>
                                <b>FAQ:</b>
                                <br />
                                <p>Do you need experience to participate?</p>
                            </div>
                            <p>
                                Nope! Code for Good is open to all participants and is a great way to introduce yourself
                                to the world of coding and product development.
                            </p>
                        </div>
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
                    <img className="absolute w-full" src="/lower_highway.svg"></img>
                </div>

                <div
                    className="absolute w-full max-w-none"
                    style={{
                        transform: `scale(${parallaxParameters.upper_highway.scale})
                                    translate3d(${parallaxParameters.upper_highway.x},
                                                ${parallaxParameters.upper_highway.y},
                                                ${parallaxParameters.upper_highway.z})`,
                    }}>
                    <img className="absolute w-full" src="/upper_highway.svg"></img>
                </div>

                <div
                    className="absolute w-full max-w-none"
                    style={{
                        transform: `scale(${parallaxParameters.foreground_buildings.scale})
                                    translate3d(${parallaxParameters.foreground_buildings.x},
                                                ${parallaxParameters.foreground_buildings.y},
                                                ${parallaxParameters.foreground_buildings.z})`,
                    }}>
                    <img className="absolute w-full" src="/foreground_buildings.svg"></img>
                    {/* Speaker Billboard */}
                    <div
                        className="relative w-full max-w-none"
                        style={{
                            transform: `translate(${parallaxParameters.foreground_buildings.speaker_billboard.x}, calc(${parallaxParameters.foreground_buildings.speaker_billboard.y} + (100vw - 1200px)/100 - (${windowWidth}px - 800px)/100))
                                              skew(0, ${parallaxParameters.foreground_buildings.speaker_billboard.skewY})`,
                            height: `${parallaxParameters.foreground_buildings.speaker_billboard.h}`,
                            width: `${parallaxParameters.foreground_buildings.speaker_billboard.w}`,
                        }}>
                        <img className="relative w-full" src="/speakers/speakerbg.svg"></img>
                        <Speaker speaker={speakers[currentSpeakerIndex]}></Speaker>
                        <div
                            className="cursor-pointer"
                            style={{
                                transform: `translate(${parallaxParameters.foreground_buildings.speaker_billboard.right_arrow.x}, calc(${parallaxParameters.foreground_buildings.speaker_billboard.right_arrow.y} + (100vw - 500px)/100))
                                              skew(0, ${parallaxParameters.foreground_buildings.speaker_billboard.right_arrow.skewY})`,
                                height: `${parallaxParameters.foreground_buildings.speaker_billboard.right_arrow.h}`,
                                width: `${parallaxParameters.foreground_buildings.speaker_billboard.right_arrow.w}`,
                            }}>
                            <img
                                src="/speakers/right_arrow.svg"
                                alt="right arrow"
                                className="h-full w-full"
                                onClick={() => setCurrentSpeakerIndex((currentSpeakerIndex + 1) % speakers.length)}
                            />
                        </div>
                        <div
                            className="cursor-pointer"
                            style={{
                                transform: `translate(${parallaxParameters.foreground_buildings.speaker_billboard.left_arrow.x}, calc(${parallaxParameters.foreground_buildings.speaker_billboard.left_arrow.y} + (100vw - 700px)/100))
                                              skew(0, ${parallaxParameters.foreground_buildings.speaker_billboard.left_arrow.skewY})`,
                                height: `${parallaxParameters.foreground_buildings.speaker_billboard.left_arrow.h}`,
                                width: `${parallaxParameters.foreground_buildings.speaker_billboard.left_arrow.w}`,
                            }}>
                            <img
                                src="/speakers/left_arrow.svg"
                                alt="right arrow"
                                className="h-full w-full"
                                onClick={() =>
                                    setCurrentSpeakerIndex(
                                        (currentSpeakerIndex - 1 + speakers.length) % speakers.length
                                    )
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
