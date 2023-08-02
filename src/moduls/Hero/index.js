/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { heroProfile, heroProfileMobile } from "../../configs/Images";
import Image from "next/image";
import { Menu } from "../../components";
import { ListSosmed } from "../../configs/Data";
import TextLoop from "react-text-loop";

function Hero() {
    return (
        <div id="home" className="h-[100vh]">
            <Menu />
            <div
                className="flex justify-between w-full object-cover absolute md:hidden"
                style={{ height: "100vh" }}
            >
                {/* <Image
                    src={heroProfileMobile}
                    alt="hero"
                    className="object-cover"
                /> */}
            </div>
            <div
                className="hidden md:flex justify-between w-full object-cover absolute"
                style={{ height: "100vh" }}
            >
                <Image src={heroProfile} alt="hero" className="object-cover" />
            </div>
            <div className="w-full h-full flex justify-center absolute">
                <div className="max-w-[1300px] w-full px-8 sm:px-20 flex flex-col pb-40 sm:pb-0 justify-end sm:justify-center items-center md:items-start">
                    <div
                        className=" font-bold text-3xl md:text-4xl mb-4 text-gray-600 text-center"
                        style={{ fontFamily: "Milliard-Bold" }}
                    >
                        Abdul Taupik Permana
                    </div>
                    <div className="flex">
                        I'm{" "}
                        <span
                            style={{ fontFamily: "Milliard-SemiBold" }}
                            className="text-primary  ml-2"
                        >
                            <TextLoop>
                                <span>Web Developer </span>
                                <span>Mobile Developer</span>
                                {/* <span>Design Grafis</span> */}
                                {/* <span>UI UX Designer</span>
                                <span>Content Creator</span> */}
                            </TextLoop>
                        </span>
                    </div>
                    <div className="mt-10 flex w-[70%] sm:w-[90%] md:w-auto justify-around ">
                        {ListSosmed.map((item, i) => (
                            <a href={item.url} target="_blank"  without rel="noreferrer"
                                key={i}
                                className="mr-0 md:mr-7 text-white opacity-80 hover:opacity-100 cursor-pointer w-8 h-8 rounded-full bg-primary flex justify-center items-center"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
