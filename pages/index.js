import { useRouter } from "next/router";

function ArrowSign(props){
    return (<>
    <div className="absolute"
            style={{transform : `translate(${props.x}, ${props.y})`,
                    width : `${props.width}`}}>
        <img className="w-full" src="/arrow_sign_frame.svg"></img>
        <div className="absolute overflow-hidden top-0 w-[40%] h-[84%]"
            style={{transform : `skew(0, 15deg) translate(120%, 0%)`}}>
            <div className="relative grid gap-y-[5%] animate-arrowSignLoop">
                <img src="/arrow_sign.svg"></img>
                <img src="/arrow_sign.svg"></img>
                <img src="/arrow_sign.svg"></img>
            </div>
        </div>
    </div>
    
    </>)
}

function AboutUsHeader(props){
    return (<>
    <div className="absolute grid font-semibold text-[3.5vw] whitespace-nowrap text-white"
        style={{transform : `translate(${props.x},calc(${props.y} + (100vw - 1200px)/100))`,
                height : `${props.height}`,
                width : `${props.width}`}}>
        <div className="absolute overflow-hidden h-[26.5%] w-[66.7%] top-[36%]"
            style={{transform : `skew(0, -11.2deg)`}}>
            <div className="animate-textLoop">ABOUT US ABOUT US ABOUT US ABOUT US ABOUT US ABOUT US ABOUT US</div>
        </div>
        <div className="absolute overflow-hidden h-[26.5%] w-[33.4%] right-0"
            style={{transform: `skew(0, 13.7deg)`, top : `calc(22.2%)`}}>
            <div style={{transform: `translateX(calc(-24.9% - (100vw - 1200px)/140))`}}><div className="animate-textLoop">ABOUT US ABOUT US ABOUT US ABOUT</div></div>
        </div>
    </div>  
    
    </>)
}

export default function Home() {
    const router = useRouter();
    
    const parallaxParameters = {
        background : {
            scale : "11.4",
            x : "0",
            y : "-320px",
            z : "-50px",
        },
        main_building : {
            scale : "1.7",
            x : "0",
            y : "-10vw",
            z : "-8px",
            text : {
                x : "80%",
                y : "310%",
                w : "35%",
                fontScale : "3vw",
                skewY : "-11deg",
            },
            arrowSign : {
                x : "70.8vw",
                y : "16vw",
                w : "19%",
            },
            scrollingHeader : {
                x : "3.9vw",
                y : "65vw",
                h : "17vw",
                w : "92.9%",
            },
        },
        billboard : {
            scale : "1",
            x : "-40%",
            y : "180vw",
            z : "-4px",
            text : {
                x : "13%",
                y : "130%",
                w : "75%",
                fontScale : "4vw",
            },
        },
        lower_highway : {
            scale : "1.1",
            x : "-20%",
            y : "280vw",
            z : "-2.2px",
        },
        upper_highway : {
            scale : "1.33",
            x : "0",
            y : "170vw",
            z : "-1.5px",
        },
        foreground_buildings : {
            scale : "1",
            x : "0",
            y : "350vw",
            z : "0",
        }

    }

    return (
        <>
            <div className="h-screen w-screen overflow-x-hidden overflow-y-auto" style={{perspective: "5px"}}>
                {/* Background */}
                <div className="absolute max-w-none w-full"    
                    style={{
                        transform : `scale(${parallaxParameters.background.scale})
                                    translate3d(${parallaxParameters.background.x},
                                                ${parallaxParameters.background.y},
                                                ${parallaxParameters.background.z})`
                }}>
                    <img className="fixed w-full" src="/background.svg"></img>
                </div>

                {/* Main Building */}
                <div className="absolute max-w-none w-full"    
                    style={{
                        transform : `scale(${parallaxParameters.main_building.scale})
                                    translate3d(${parallaxParameters.main_building.x},
                                                ${parallaxParameters.main_building.y},
                                                ${parallaxParameters.main_building.z})`
                    }}>
                    {/* Building SVG */}
                    <img className="absolute w-full" src="/main_building.svg"></img>
                    
                    {/* Arrow Sign */}
                    <ArrowSign x={parallaxParameters.main_building.arrowSign.x}
                               y={parallaxParameters.main_building.arrowSign.y}
                               width={parallaxParameters.main_building.arrowSign.w}></ArrowSign>
                    
                    {/* Main Text */}
                    <div className="absolute whitespace-normal text-center leading-snug"
                         style={{transform : `translate(${parallaxParameters.main_building.text.x}, calc(${parallaxParameters.main_building.text.y} + (100vw - 1200px)/100))
                                              skew(0, ${parallaxParameters.main_building.text.skewY})`,
                                 fontSize : `${parallaxParameters.main_building.text.fontScale}`,
                                 width : `${parallaxParameters.main_building.text.w}`}}>
                        <div>Hackduke is a premier intercollegiate hackathon for social good. Blah blah blah blah blahh blah blah</div>
                        <br/>
                        <a href="https://hackduke.org/" className="font-bold underline">Learn More →</a>
                    </div>

                    {/* Scrolling Header */}
                    <AboutUsHeader x={parallaxParameters.main_building.scrollingHeader.x}
                                   y={parallaxParameters.main_building.scrollingHeader.y}
                                   height={parallaxParameters.main_building.scrollingHeader.h}
                                   width={parallaxParameters.main_building.scrollingHeader.w}></AboutUsHeader>
                </div>

                <div className="absolute max-w-none w-full"    
                    style={{
                        transform : `scale(${parallaxParameters.billboard.scale})
                                    translate3d(${parallaxParameters.billboard.x},
                                                ${parallaxParameters.billboard.y},
                                                ${parallaxParameters.billboard.z})`
                }}>
                    <img className="absolute w-full" src="/billboard.svg"></img>
                    <div className="absolute whitespace-normal bg-red-500"
                         style={{transform : `translate(${parallaxParameters.billboard.text.x}, ${parallaxParameters.billboard.text.y})`,
                                 fontSize : `${parallaxParameters.billboard.text.fontScale}`,
                                 width : `${parallaxParameters.billboard.text.w}`}}>
                        ham burger ham burger ham burger ha m burger ham burger ham burger ham burger ham burger hamb urger ham burger h amburger ha mburger 
                    </div>
                </div>

                <div className="absolute max-w-none w-full"    
                    style={{
                        transform : `scale(${parallaxParameters.lower_highway.scale})
                                    translate3d(${parallaxParameters.lower_highway.x},
                                                ${parallaxParameters.lower_highway.y},
                                                ${parallaxParameters.lower_highway.z})`
                }}>
                    <img className="absolute w-full" src="/lower_highway.svg"></img>
                </div>
                
                <div className="absolute max-w-none w-full"    
                    style={{
                        transform : `scale(${parallaxParameters.upper_highway.scale})
                                    translate3d(${parallaxParameters.upper_highway.x},
                                                ${parallaxParameters.upper_highway.y},
                                                ${parallaxParameters.upper_highway.z})`
                }}>
                    <img className="absolute w-full" src="/upper_highway.svg"></img>
                </div>

                <div className="absolute max-w-none w-full"    
                    style={{
                        transform : `scale(${parallaxParameters.foreground_buildings.scale})
                                    translate3d(${parallaxParameters.foreground_buildings.x},
                                                ${parallaxParameters.foreground_buildings.y},
                                                ${parallaxParameters.foreground_buildings.z})`
                }}>
                    <img className="absolute w-full" src="/foreground_buildings.svg"></img>
                </div>

                
            </div>
        </>
    );

}
