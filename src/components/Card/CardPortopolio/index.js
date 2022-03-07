import React from "react";
import Image from "next/image";
import { mantis } from "../../../configs/Images";
import { RiGlobalFill } from "react-icons/ri";

function CardPortopolio(props) {
    const { data } = props;
    return (
        <div className="shadow-md h-[225px] object-cover w-full md:w-96 rounded-md text-black">
            <div
                className="w-full h-full cursor-pointer"
                onClick={() => window.open(`https://${data.link}`)}
            >
                <Image src={data.image} alt="hero" />
            </div>
            <div className="mt-4 hidden md:flex justify-between ">
                <p>{data.title}</p>
                <RiGlobalFill
                    className="cursor-pointer text-primary"
                    onClick={() => window.open(`https://${data.link}`)}
                />
            </div>
        </div>
    );
}

export default CardPortopolio;
