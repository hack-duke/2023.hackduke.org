import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Navbar() {
    return (
        <div className="sticky top-0 flex h-[5rem] w-[100%] items-center justify-end gap-x-1 bg-[#121432] bg-opacity-60 text-white backdrop-blur-md">
            <a
                className="m-[5%] flex h-[3rem] w-[25%] items-center justify-center rounded-lg border-2 hover:cursor-pointer hover:bg-indigo-600"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.hackduke.org/">
                Home
            </a>
            <a
                className="m-[5%] flex h-[3rem] w-[25%] items-center justify-center rounded-lg border-2 hover:cursor-pointer hover:bg-indigo-600"
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:sponsorship@hackduke.org">
                Sponsor Us
            </a>

            <FaFacebook
                className="m-[1%] cursor-pointer"
                size={35}
                onClick={() => {
                    window.open("https://www.facebook.com/hackduke", "_blank");
                }}
            />
            <FaInstagram
                className="m-[1%] cursor-pointer"
                size={35}
                onClick={() => {
                    window.open(
                        "https://www.instagram.com/hackduke/",
                        "_blank"
                    );
                }}
            />
            <FaTwitter
                className="m-[1%] mr-4 cursor-pointer"
                size={35}
                onClick={() => {
                    window.open("https://twitter.com/hackduke", "_blank");
                }}
            />
        </div>
    );
}

export default Navbar;
