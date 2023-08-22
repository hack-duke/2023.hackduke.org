import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Stars from "../components/Stars";

const scheduleData = require("../public/schedule.json");

const sponsorsData = require("../public/sponsors.json");

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
                    className="absolute top-[46%] h-[26.5%] w-[66.6%] overflow-hidden lg:top-[38%]"
                    style={{ transform: `skew(0, -11.2deg)` }}>
                    <div className="animate-textLoop">
                        ABOUT US ABOUT US ABOUT US ABOUT US ABOUT US ABOUT US ABOUT US
                    </div>
                </div>
                <div
                    className="absolute right-0 top-[33%] h-[26.5%] w-[33.4%] overflow-hidden lg:top-[25%]"
                    style={{
                        transform: `skew(0, 13.7deg)`,
                    }}>
                    <div
                        style={{
                            transform: `translateX(calc(-16% - (100vw - 1200px)/140))`,
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
        register: {
            x: "10vw",
            y: "36vw",
            // w: "300vw",
            fontScale: "2.5vw",
            skewY: "0deg",
            w: "50vw",
        },
        text: {
            x: "60%",
            y: "335%",
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
            x: "6vw",
            y: "67.5vw",
            h: "17vw",
            w: "88.5%",
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
            },
        },
        pagination: {
            x: "13%",
            y: "70vw",
            w: "75%",
            h: "100%",
            fontScale: "3vw",
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
    targets: {
        education: {
            scale: "0.12",
            x: "295vw",
            y: "640vw",
            z: "0",
        },
        health: {
            scale: "0.12",
            x: "110vw",
            y: "470vw",
            z: "0",
        },
        environment: {
            scale: "0.12",
            x: "-160vw",
            y: "530vw",
            z: "0",
        },
        inequality: {
            scale: "0.12",
            x: "-236vw",
            y: "426vw",
            z: "0",
        },
    },
    labels: {
        education: {
            scale: "0.25",
            x: "120vw",
            y: "330vw",
            z: "-1.2px",
        },
        health: {
            scale: "0.19",
            x: "118vw",
            y: "276vw",
            z: "-1.2px",
        },
        environment: {
            scale: "0.28",
            x: "-107vw",
            y: "247vw",
            z: "-1.2px",
        },
        inequality: {
            scale: "0.23",
            x: "-120vw",
            y: "210vw",
            z: "-1.2px",
        },
    },
    modal: {
        scale: "0.7",
        x: "0",
        y: "-5rem",
        z: "-0.5px",
        close: {
            scale: "0.07",
            x: "500vw",
            y: "120vw",
            z: "0",
        },
    },
    foreground_buildings: {
        scale: "1",
        x: "0",
        y: "360vw",
        z: "0",
        speaker_billboard: {
            x: "23.5%",
            y: "22%",
            w: "83.5%",
            h: "53%",
            skewY: "0",
            title: {
                x: "1vw",
                y: "-72vw",
                w: "43vw",
                h: "18vw",
                fontScale: "4.4vw",
                skewY: "-11deg",
            },
            talk: {
                x: "6.6vw",
                y: "-78vw",
                w: "37vw",
                h: "11vw",
                fontScale: "3vw",
                skewY: "-11deg",
            },
            pic: {
                x: "159%",
                y: "-178%",
                h: "36%",
                w: "35%",
                skewY: "-11deg",
            },
            progress: {
                x: "30vw",
                y: "-45vw",
                h: "36%",
                w: "35%",
                skewY: "-11deg",
            },
            right_arrow: {
                x: "71vw",
                y: "-83.5vw",
                h: "8%",
                w: "8%",
                skewY: "-5deg",
            },
            left_arrow: {
                x: "6vw",
                y: "-76vw",
                h: "8.3%",
                w: "8.3%",
                skewY: "-4deg",
            },
        },
        schedule: {
            text: {
                x: "27vw",
                y: "-27vw",
                z: "0",
                w: "69vw",
                h: "90vw",
                fontScale: "1.7vw",
                skewY: "-10deg",
                titleFontScale: "4vw",
            },
        },
    },
    sponsors: {
        scale: "1",
        x: "0",
        y: "500vw",
        z: "0",
        sponsor_logos: {
            x: "22vw",
            y: "126vw",
            z: "0",
            w: "58vw",
            h: "131vw",
            fontScale: "1.7vw",
            skewY: "0",
            titleFontScale: "4vw",
        },
    },
};

const Modal = ({ onClose, svgSrc }) => {
    return (
        <div className="fixed z-[9] flex h-[100vh] w-[100vw] content-center bg-red-600 bg-opacity-10">
            <div
                className="w-full"
                style={{
                    transform: `scale(${parallaxParameters.modal.scale})
                                    translate3d(${parallaxParameters.modal.x},
                                                ${parallaxParameters.modal.y},
                                                ${parallaxParameters.modal.z})`,
                }}>
                <img className="absolute w-full" src={svgSrc}></img>
                {/* Close button */}
                <div
                    className="relative cursor-pointer"
                    style={{
                        transform: `scale(${parallaxParameters.modal.close.scale})
                                        translate3d(${parallaxParameters.modal.close.x},
                                                    ${parallaxParameters.modal.close.y},
                                                    ${parallaxParameters.modal.close.z})`,
                    }}
                    onClick={onClose}>
                    <img className="absolute w-full" src="/modal_close.svg"></img>
                </div>
            </div>
        </div>
    );
};

function Speaker({ speaker, currentSpeakerIndex, totalSpeakers }) {
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
                className="flex items-center justify-center"
                style={{
                    transform: `translate(${parallaxParameters.foreground_buildings.speaker_billboard.progress.x}, calc(${parallaxParameters.foreground_buildings.speaker_billboard.progress.y} + (100vw - 1200px)/100 - (${windowWidth}px - 1100px)/100))
                                        skew(0, ${parallaxParameters.foreground_buildings.speaker_billboard.progress.skewY})`,
                    height: `${parallaxParameters.foreground_buildings.speaker_billboard.progress.h}`,
                    width: `${parallaxParameters.foreground_buildings.speaker_billboard.progress.w}`,
                }}>
                {Array.from({ length: totalSpeakers }).map((_, i) => (
                    <div
                        key={i}
                        className={`mx-2 h-2.5 w-2.5 rounded-full ${
                            i === currentSpeakerIndex ? "bg-[#A65E63]" : "bg-white"
                        }
                            sm:mx-2 sm:h-2 sm:w-2
                            md:mx-3 md:h-3 md:w-3
                            lg:mx-4 lg:h-4 lg:w-4`}></div>
                ))}
            </div>

            <div
                className="text-right font-semibold text-white"
                style={{
                    transform: `translate(${parallaxParameters.foreground_buildings.speaker_billboard.title.x}, calc(${parallaxParameters.foreground_buildings.speaker_billboard.title.y} + (100vw - 1200px)/100 - (${windowWidth}px - 1200px)/100))
                                        skew(0, ${parallaxParameters.foreground_buildings.speaker_billboard.title.skewY})`,
                    height: `${parallaxParameters.foreground_buildings.speaker_billboard.title.h}`,
                    fontSize: `${parallaxParameters.foreground_buildings.speaker_billboard.title.fontScale}`,
                    width: `${parallaxParameters.foreground_buildings.speaker_billboard.title.w}`,
                }}>
                {speaker.name}
            </div>
            <div
                className="text-right font-semibold text-[#A65E63]"
                style={{
                    transform: `translate(${parallaxParameters.foreground_buildings.speaker_billboard.talk.x}, calc(${parallaxParameters.foreground_buildings.speaker_billboard.talk.y} + (100vw - 1200px)/100 - (${windowWidth}px - 1200px)/100))
                                        skew(0, ${parallaxParameters.foreground_buildings.speaker_billboard.talk.skewY})`,
                    height: `${parallaxParameters.foreground_buildings.speaker_billboard.talk.h}`,
                    fontSize: `${parallaxParameters.foreground_buildings.speaker_billboard.talk.fontScale}`,
                    width: `${parallaxParameters.foreground_buildings.speaker_billboard.talk.w}`,
                }}>
                {speaker.title}
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

    const [showInequality, setShowInequality] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [modalSvgSrc, setModalSvgSrc] = useState("");

    const openModal = (svgSrc) => {
        setModalSvgSrc(svgSrc);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const speakers = [
        {
            name: "YUNHA KIM",
            pic: "/speakers/yunha.jpeg",
            title: "Founder & CEO @ Sleep Reset",
            talk: "Opening Ceremony Speaker",
        },
        {
            name: "SHERARD GRIFFIN",
            pic: "/speakers/sherard.jpeg",
            title: "Sr. Director of Engineering, AI services @ Red Hat",
            talk: "Closing Ceremony Speaker",
        },
        {
            name: "ALFREDO DEZA",
            pic: "/speakers/alfredo.jpeg",
            title: "Principal Cloud Advocate @ Microsoft",
            talk: "Workshop: Github Copilot",
        },
        {
            name: "SANJAY KAMLANI",
            pic: "/speakers/sanjay.jpeg",
            title: "Founder & CEO @ Maker5",
            talk: "Saturday Speaker: Startup Talk",
        },
        {
            name: "Justin Klein",
            pic: "/speakers/justin.jpg",
            title: "Managing Partner @ Vensana Capital",
            talk: "Saturday Speaker: Innovation in Healthcare",
        },
    ];

    const faqs = [
        {
            question: "Who can I work with?",
            answer: "Anyone! You are welcome to work alone, but we definitely recommend working with a team and get to know your fellow programmers from Duke and other schools!",
        },
        {
            question: "What can I make?",
            answer: "We welcome all software and hardware hacks that align with our tracks. Our mission is to code for social good, so make sure to create a project that is impactful for the track you have chosen! ",
        },
        {
            question: "Who can participate?",
            answer: "You can participate as long as you're a student (undergraduate or graduate) 18 years or older. If you are a new grad, we’d love to have you as well! We aim to be beginner-friendly, so, all are welcome!",
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
            {showModal && <Modal onClose={closeModal} svgSrc={modalSvgSrc} />}
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
                    {/* <DateSign
                        x={parallaxParameters.main_building.dateSign.x}
                        y={parallaxParameters.main_building.dateSign.y}
                        width={parallaxParameters.main_building.dateSign.w}></DateSign> */}

                    <div
                        className="absolute"
                        style={{
                            transform: `translate(${parallaxParameters.main_building.register.x}, calc(${parallaxParameters.main_building.register.y} + (100vw - 1200px)/100))
                                          skew(0, ${parallaxParameters.main_building.register.skewY})`,
                            fontSize: `${parallaxParameters.main_building.register.fontScale}`,
                            width: `${parallaxParameters.main_building.register.w}`,
                            // scale: `${parallaxParameters.main_building.register.scale}`,
                        }}>
                        <a target="_blank" href="https://forms.gle/cQrGHaULzoitipxZ6" rel="noopener noreferrer">
                            <img src="/register_button.svg" className="w-full hover:cursor-pointer"></img>
                        </a>
                    </div>

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
                        <div
                            style={{
                                minHeight: `${parallaxParameters.billboard.text.h}`,
                                maxHeight: `${parallaxParameters.billboard.text.h}`,
                            }}>
                            <div>
                                <p>
                                    <b>FAQ: </b> {faqs[currentFAQIndex].question}
                                </p>
                            </div>
                            <div>{faqs[currentFAQIndex].answer}</div>
                        </div>
                    </div>
                    <div
                        style={{
                            width: `${parallaxParameters.billboard.pagination.w}`,
                            height: `${parallaxParameters.billboard.pagination.h}`,
                            transform: `translate(${parallaxParameters.billboard.pagination.x}, ${parallaxParameters.billboard.pagination.y})`,
                            textAlign: "center",
                            fontSize: `${parallaxParameters.billboard.pagination.fontScale}`,
                            fontWeight: `bold`,
                        }}>
                        <p>
                            {currentFAQIndex + 1} / {faqs.length}
                        </p>
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
                    {!showModal && (
                        <div>
                            <div className="target-parent" onClick={() => openModal("/education_modal.svg")}>
                                {/* Education Target */}
                                <div
                                    className="relative cursor-pointer"
                                    style={{
                                        transform: `scale(${parallaxParameters.targets.education.scale})
                                        translate3d(${parallaxParameters.targets.education.x},
                                                    ${parallaxParameters.targets.education.y},
                                                    ${parallaxParameters.targets.education.z})`,
                                    }}>
                                    <img className="rotate-on-hover absolute w-full" src="/education_target.svg"></img>
                                </div>
                                {/* Education Label */}
                                <div
                                    className="relative cursor-pointer"
                                    style={{
                                        transform: `scale(${parallaxParameters.labels.education.scale})
                                        translate3d(${parallaxParameters.labels.education.x},
                                                    ${parallaxParameters.labels.education.y},
                                                    ${parallaxParameters.labels.education.z})`,
                                    }}>
                                    <img className="absolute w-full" src="/education_button.svg"></img>
                                </div>
                            </div>

                            <div className="target-parent" onClick={() => openModal("/health_modal.svg")} d>
                                {/* Health Target */}
                                <div
                                    className="relative cursor-pointer"
                                    style={{
                                        transform: `scale(${parallaxParameters.targets.health.scale})
                                    translate3d(${parallaxParameters.targets.health.x},
                                                ${parallaxParameters.targets.health.y},
                                                ${parallaxParameters.targets.health.z})`,
                                    }}>
                                    <img className="rotate-on-hover absolute w-full" src="/health_target.svg"></img>
                                </div>
                                {/* Health Label */}
                                <div
                                    className="relative cursor-pointer"
                                    style={{
                                        transform: `scale(${parallaxParameters.labels.health.scale})
                                        translate3d(${parallaxParameters.labels.health.x},
                                                    ${parallaxParameters.labels.health.y},
                                                    ${parallaxParameters.labels.health.z})`,
                                    }}>
                                    <img className="absolute w-full" src="/health_button.svg"></img>
                                </div>
                            </div>

                            <div className="target-parent" onClick={() => openModal("/inequality_modal.svg")}>
                                {/* Inequality Target */}
                                <div
                                    className="relative cursor-pointer"
                                    style={{
                                        transform: `scale(${parallaxParameters.targets.inequality.scale})
                                    translate3d(${parallaxParameters.targets.inequality.x},
                                                ${parallaxParameters.targets.inequality.y},
                                                ${parallaxParameters.targets.inequality.z})`,
                                    }}>
                                    <img className="rotate-on-hover absolute w-full" src="/inequality_target.svg"></img>
                                </div>
                                {/* Inequality Label */}
                                <div
                                    className="relative cursor-pointer"
                                    style={{
                                        transform: `scale(${parallaxParameters.labels.inequality.scale})
                                        translate3d(${parallaxParameters.labels.inequality.x},
                                                    ${parallaxParameters.labels.inequality.y},
                                                    ${parallaxParameters.labels.inequality.z})`,
                                    }}>
                                    <img className="absolute w-full" src="/inequality_button.svg"></img>
                                </div>
                            </div>

                            <div className="target-parent" onClick={() => openModal("/environment_modal.svg")}>
                                {/* Environment Target */}
                                <div
                                    className="relative cursor-pointer"
                                    style={{
                                        transform: `scale(${parallaxParameters.targets.environment.scale})
                                    translate3d(${parallaxParameters.targets.environment.x},
                                                ${parallaxParameters.targets.environment.y},
                                                ${parallaxParameters.targets.environment.z})`,
                                    }}>
                                    <img
                                        className="rotate-on-hover absolute w-full"
                                        src="/environment_target.svg"></img>
                                </div>
                                {/* Environment Label */}
                                <div
                                    className="relative cursor-pointer"
                                    style={{
                                        transform: `scale(${parallaxParameters.labels.environment.scale})
                                        translate3d(${parallaxParameters.labels.environment.x},
                                                    ${parallaxParameters.labels.environment.y},
                                                    ${parallaxParameters.labels.environment.z})`,
                                    }}>
                                    <img className="absolute w-full" src="/environment_button.svg"></img>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Show the modal if showModal is true */}
                    {/* {showModal && <Modal onClose={closeModal} svgSrc={modalSvgSrc} />} */}
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
                        <Speaker
                            speaker={speakers[currentSpeakerIndex]}
                            currentSpeakerIndex={currentSpeakerIndex}
                            totalSpeakers={speakers.length}></Speaker>
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
                                alt="left arrow"
                                className="h-full w-full"
                                onClick={() =>
                                    setCurrentSpeakerIndex(
                                        (currentSpeakerIndex - 1 + speakers.length) % speakers.length
                                    )
                                }
                            />
                        </div>
                    </div>

                    {/* Schedule */}
                    <div
                        className="relative w-full max-w-none"
                        style={{
                            transform: `translate3d(${parallaxParameters.foreground_buildings.schedule.text.x},
                            ${parallaxParameters.foreground_buildings.schedule.text.y},
                            ${parallaxParameters.foreground_buildings.schedule.text.z}) skew(0, ${parallaxParameters.foreground_buildings.schedule.text.skewY})`,
                            width: `${parallaxParameters.foreground_buildings.schedule.text.w}`,
                            height: `${parallaxParameters.foreground_buildings.schedule.text.h}`,
                        }}>
                        {Object.entries(scheduleData).map((entry) => {
                            const [day, events] = entry;

                            return (
                                <div key={day}>
                                    <div
                                        style={{
                                            alignItems: "center",
                                            textAlign: "center",
                                            fontSize: `${parallaxParameters.foreground_buildings.schedule.text.titleFontScale}`,
                                        }}>
                                        <b>{day}</b>
                                        <hr
                                            style={{
                                                borderColor: "black",
                                                marginRight: "1rem",
                                                marginLeft: "1rem",
                                                marginBottom: "1rem",
                                            }}
                                        />
                                    </div>
                                    {events.map((event) => {
                                        const start_time = event.start_time;
                                        const end_time = event.end_time;
                                        const title = event.title;
                                        const location = event.location;

                                        return (
                                            <div
                                                style={{
                                                    marginBottom: "1rem",
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    marginRight: "1rem",
                                                    marginLeft: "1rem",
                                                    fontSize: `${parallaxParameters.foreground_buildings.schedule.text.fontScale}`,
                                                }}>
                                                <p>
                                                    {title} @ {location}
                                                </p>
                                                <p>
                                                    {start_time} - {end_time}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div
                    className="absolute w-full max-w-none"
                    style={{
                        transform: `scale(${parallaxParameters.sponsors.scale})
                                    translate3d(${parallaxParameters.sponsors.x},
                                                ${parallaxParameters.sponsors.y},
                                                ${parallaxParameters.sponsors.z})`,
                    }}>
                    <img className="absolute w-full" src="/sponsors.svg"></img>
                    <div
                        className="relative w-full max-w-none"
                        style={{
                            transform: `translate3d(${parallaxParameters.sponsors.sponsor_logos.x},
                            ${parallaxParameters.sponsors.sponsor_logos.y},
                            ${parallaxParameters.sponsors.sponsor_logos.z}) skew(0, ${parallaxParameters.sponsors.sponsor_logos.skewY})`,
                            width: `${parallaxParameters.sponsors.sponsor_logos.w}`,
                            height: `${parallaxParameters.sponsors.sponsor_logos.h}`,
                        }}>
                        <div className="flex flex-wrap justify-center">
                            {sponsorsData.map((entry) => {
                                const tier = entry.tier;
                                const sponsors = entry.sponsors;

                                return (
                                    <div key={tier} className="flex flex-col justify-center">
                                        <div
                                            style={{
                                                textAlign: "center",
                                                fontSize: `${parallaxParameters.sponsors.sponsor_logos.titleFontScale}`,
                                            }}>
                                            <b>{tier}</b>
                                            <hr
                                                style={{
                                                    borderColor: "black",
                                                    marginRight: "1rem",
                                                    marginLeft: "1rem",
                                                    marginBottom: "1rem",
                                                }}
                                            />
                                            {/* Sponsors */}
                                            <div className="flex flex-wrap justify-center">
                                                {sponsors.map((sponsor) => {
                                                    const name = sponsor.name;
                                                    const logo = sponsor.logo;
                                                    const url = sponsor.url;

                                                    return (
                                                        <a
                                                            key={name}
                                                            className="flex flex-col items-center justify-center p-[2vw]"
                                                            style={{
                                                                width: "50%",
                                                                marginBottom: "1rem",
                                                            }}
                                                            href={url}
                                                            target="_blank"
                                                            rel="noopener noreferrer">
                                                            <img src={logo} alt={name} className="w-full" />
                                                        </a>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
