import React from "react";
import { ListSosmed } from "../../configs/Data";

function Footer() {
    return (
        <div className="h-80 mt-20 w-full flex flex-col items-center justify-around bg-gray-100 py-10 px-3 md:px-20 ">
            <p
                className=" font-bold text-xl md:text-3xl mb-4 text-gray-600"
                style={{ fontFamily: "Milliard-Bold" }}
            >
                Abdul Taupik Permana
            </p>
            <p className="text-sm italic text-center ">
                Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
                eligendi fuga maxime saepe commodi placeat.
            </p>
            <div className="flex justify-between w-48 my-10">
                {ListSosmed.map((item, i) => (
                    <div
                        key={i}
                        className="  w-9 h-9 rounded-full flex justify-center items-center cursor-pointer bg-primary text-white hover:opacity-70"
                    >
                        {item.icon}
                    </div>
                ))}
            </div>
            <p className="text-sm">
                ©Abdul Taupik Permana. All Rights Reserved
            </p>
        </div>
    );
}

export default Footer;
