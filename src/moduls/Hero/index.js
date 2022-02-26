/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { heroProfile } from "../../configs/Images";
import Image from "next/image";
import Typist from "react-typist";
import { BaseContainer, Menu } from "../../components";
import { ListSosmed } from "../../configs/Data";

function Hero() {
    return (
        <div id="home" className="h-[700px]">
            <Menu />

            <BaseContainer>
                <div
                    className="flex flex-col justify-center h-full text-gray-600 absolute "
                    style={{ zIndex: 8 }}
                >
                    <div
                        className=" font-black text-5xl mb-4"
                        style={{ fontFamily: "Milliard-Bold" }}
                    >
                        Abdul Taupik Permana
                    </div>

                    <Typist
                        className="text-xl font-semibold"
                        style={{ fontFamily: "Milliard-SemiBold" }}
                    >
                        I'm <span className="text-primary ">Web Developer</span>
                    </Typist>
                    <div className="mt-10 flex ">
                        {ListSosmed.map((item, i) => (
                            <div
                                key={i}
                                className="mr-7 hover:text-primary cursor-pointer"
                            >
                                {item.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </BaseContainer>
            {/* <div className="flex justify-between w-full h-full ">
                <Image src={heroProfile} alt="hero" />
            </div> */}
        </div>
    );
}

export default Hero;
