import React, { useState } from "react";

function CardResume(props) {
    const { heading, data } = props;
    console.log("data", data);
    return (
        <div className="flex flex-col">
            <div className="text-2xl font-black mb-5 text-black -ml-2">
                {heading}
            </div>
            {data?.map((item, i) => (
                <div key={i} className="flex ">
                    <div
                        className="absolute w-5 h-5 bg-white border-primary  border-2 rounded-full "
                        style={{ marginLeft: -9, marginTop: 0 }}
                    ></div>
                    <div className="w-full border-l-2 pl-5 border-primary">
                        <p className="text-primary text-xl font-bold -mt-1">
                            {item.title}
                        </p>
                        {item?.date ? (
                            <p className=" py-1 mt-1 text-base">{item.date}</p>
                        ) : null}
                        <p className="text-base italic mt-1">{item.address}</p>
                        <p className="text-base mt-1">{item.major}</p>
                        <p className="text-base mt-1">{item.description}</p>
                        {item?.information ? (
                            <>
                                {item.information.map((information, inf) => (
                                    <div key={inf} className="flex">
                                        <p className="w-28">
                                            {information.items.label}
                                        </p>
                                        <p>{": " + information.items.value}</p>
                                    </div>
                                ))}
                            </>
                        ) : null}
                        {item?.items?.length !== 0 ? (
                            <ul style={{ listStyleType: "disc" }}>
                                <div className="pl-5 mt-3">
                                    {item?.items?.map((item, j) => (
                                        <li key={j} className="mt-1">
                                            {item}
                                        </li>
                                    ))}
                                </div>
                            </ul>
                        ) : null}
                        {data?.length - 1 !== i ? (
                            <div className="h-6" />
                        ) : null}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardResume;
