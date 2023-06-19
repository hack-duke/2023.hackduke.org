import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Stars from "../components/Stars";

const scheduleData = require('../public/schedule.json');

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
            y: "70%",
            w: "75%",
            fontScale: "4vw",
            h: "40vw",
            right_arrow: {
                x: "85vw",
                y: "2225%",
                h: "5%",
                w: "5%",
                skewY: "10deg",
            },
            left_arrow: {
                x: "5vw",
                y: "2300%",
                h: "5%",
                w: "5%",
                skewY: "10deg",
            }
        },
        pagination: {
            x: "13%",
            y: "70vw",
            w: "75%",
            h: "100%",
            fontScale: "3vw"
        }
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
        y: "360vw",
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
                y: "-94.5vw",
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
        schedule: {
            text: {
                x: "27vw",
                y: "-40vw",
                z: "0",
                w: "69vw",
                h: "90vw",
                fontScale: "1.7vw",
                skewY: "-10deg",
                titleFontScale: "4vw"
            }
        }
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
                <img src={speaker.pic} alt={speaker.name} className="w-full h-full" />
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
                <p class=" font-semibold text-[#A5706F] ">{speaker.title}</p>
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
    const [currentFAQIndex, setCurrentFAQIndex] = useState(0);
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


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentFAQIndex((currentFAQIndex + 1) % faqs.length);
            console.log(currentFAQIndex);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [currentFAQIndex]);

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

    const faqs = [
        {
            question: "Who can I work with?",
            answer: "Anyone! You are welcome to work alone, but we definitely recommend working with a team and get to know your fellow programmers from Duke and other schools!"
        },
        {
            question: "What can I make?",
            answer: "We welcome all software and hardware hacks that align with our tracks. Our mission is to code for social good, so make sure to create a project that is impactful for the track you have chosen! "
        },
        {
            question: "Who can participate?",
            answer: "You can participate as long as you're a student (undergraduate or graduate) 18 years or older. If you are a new grad, we’d love to have you as well! We aim to be beginner-friendly, so, all are welcome!"
        }
    ]

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
            <div className="w-screen h-screen overflow-x-hidden overflow-y-auto" style={{ perspective: "5px" }}>
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
                        className="absolute leading-snug text-center whitespace-normal"
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
                        <div
                            style={{
                                minHeight: `${parallaxParameters.billboard.text.h}`,
                                maxHeight: `${parallaxParameters.billboard.text.h}`,
                            }}>
                            <div>
                                <p><b>FAQ: </b> {faqs[currentFAQIndex].question}</p>
                            </div>
                            <div>
                                {faqs[currentFAQIndex].answer}
                            </div>
                        </div>

                    </div>
                    <div style={{
                        width: `${parallaxParameters.billboard.pagination.w}`,
                        height: `${parallaxParameters.billboard.pagination.h}`,
                        transform: `translate(${parallaxParameters.billboard.pagination.x}, ${parallaxParameters.billboard.pagination.y})`,
                        textAlign: 'center',
                        fontSize: `${parallaxParameters.billboard.pagination.fontScale}`,
                        fontWeight: `bold`
                        ,
                    }}>

                        <p>{currentFAQIndex + 1} / {faqs.length}</p>

                    </div>
                    {/* <div
                        className="cursor-pointer z-[50]"
                        style={{
                            transform: `translate(${parallaxParameters.billboard.text.right_arrow.x}, ${parallaxParameters.billboard.text.right_arrow.y})
                                              skew(0, ${parallaxParameters.billboard.text.right_arrow.skewY})`,
                            height: `${parallaxParameters.billboard.text.right_arrow.h}`,
                            width: `${parallaxParameters.billboard.text.right_arrow.w}`,
                        }}>
                        <img
                            src="/speakers/right_arrow.svg"
                            alt="right arrow"
                            className="w-full h-full"
                            onClick={() => setCurrentFAQIndex((currentFAQIndex + 1) % faqs.length)}
                        />
                    </div>
                    <div
                        className="cursor-pointer z-[20]"
                        style={{
                            transform: `translate(${parallaxParameters.billboard.text.left_arrow.x}, ${parallaxParameters.billboard.text.left_arrow.y})
                                              skew(0, ${parallaxParameters.billboard.text.left_arrow.skewY})`,
                            height: `${parallaxParameters.billboard.text.left_arrow.h}`,
                            width: `${parallaxParameters.billboard.text.left_arrow.w}`,
                        }}>
                        <img
                            src="/speakers/left_arrow.svg"
                            alt="left arrow"
                            className="w-full h-full"
                            onClick={() =>
                                setCurrentFAQIndex(
                                    (currentFAQIndex - 1 + faqs.length) % faqs.length
                                )
                            }
                        />
                    </div> */}
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
                                className="w-full h-full"
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
                                alt="left arrow"
                                className="w-full h-full"
                                onClick={() =>
                                    setCurrentSpeakerIndex(
                                        (currentSpeakerIndex - 1 + speakers.length) % speakers.length
                                    )
                                }
                            />
                        </div>
                    </div>

                    {/* Schedule */}
                    <div className="relative w-full max-w-none"
                        style={{
                            transform: `translate3d(${parallaxParameters.foreground_buildings.schedule.text.x},
                            ${parallaxParameters.foreground_buildings.schedule.text.y},
                            ${parallaxParameters.foreground_buildings.schedule.text.z}) skew(0, ${parallaxParameters.foreground_buildings.schedule.text.skewY})`,
                            width: `${parallaxParameters.foreground_buildings.schedule.text.w}`,
                            height: `${parallaxParameters.foreground_buildings.schedule.text.h}`,
                        }}>
                        {Object.entries(scheduleData).map((entry) => {
                            const [day, events] = entry;

                            return <div>
                                <div style={{ alignItems: 'center', textAlign: 'center', fontSize: `${parallaxParameters.foreground_buildings.schedule.text.titleFontScale}` }}>
                                    <b>{day}</b>
                                    <hr style={{ borderColor: 'black', marginRight: '1rem', marginLeft: '1rem', marginBottom: '1rem' }} />
                                </div>
                                {events.map((event) => {
                                    const start_time = event.start_time;
                                    const end_time = event.end_time;
                                    const title = event.title;
                                    const location = event.location;

                                    return <div style={{ marginBottom: '1rem', display: "flex", justifyContent: 'space-between', marginRight: '1rem', marginLeft: '1rem', fontSize: `${parallaxParameters.foreground_buildings.schedule.text.fontScale}` }}>
                                        <p>{title} @ {location}</p>
                                        <p>{start_time} - {end_time}</p>
                                    </div>
                                })}
                            </div>
                        })}

                    </div>
                </div>
            </div >
        </>
    );
}
