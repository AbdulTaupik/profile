import React from "react";
import Image from "next/image";

function CardSkillImage(props) {
    const { data } = props;

    return (
        <div className=" text-white mx-2 rounded-md flex justify-center items-center hover:shadow-md ease-in duration-200">
            <div className="w-[150px]">
                <Image src={data.image} alt={data.name} />
            </div>
        </div>
    );
}

export default CardSkillImage;
