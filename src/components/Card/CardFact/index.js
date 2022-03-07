import React from "react";

function CardFact(props) {
    const { data } = props;
    return (
        <div className=" flex flex-col h-32 w-40 justify-between items-center">
            <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center text-white">
                {data.icon}
            </div>
            <div className="font-bold text-xl text-black">{data.title}</div>
            <div className="text-tiny text-black">{data.description}</div>
        </div>
    );
}

export default CardFact;
