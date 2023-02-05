import { useEffect, useState } from "react";
export default function Home() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    useEffect(() => {
        function updateMouse(e) {
            e.preventDefault();
            setMousePos({ x: e.clientX, y: e.clientY });
            // console.log(mousePos);
        }
        // add event listener
        window.addEventListener("mousemove", updateMouse);
        moveSpotlight();
        // remove event listener on cleanup
        return () => window.removeEventListener("mousemove", updateMouse);
    });

    function moveSpotlight() {
        // const spotlight = document.querySelector(".spotlight");
        // spotlight.style.top = `${mousePos.y - 100}px`;
        // spotlight.style.left = `${mousePos.x - 100}px`;
    }

    return (
        <>
            {/* <div className="w-[100%] h-[3rem]">hi</div> */}
            <div className="bg-[url('/temp_mobile.svg')] lg:bg-[url('/temp.svg')] w-[100vw] h-[100vh] lg:h-[120vh] bg-center bg-cover"></div>
        </>
    );
}
