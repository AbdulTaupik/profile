import React, { useState } from "react";

function Tabs(props) {
    const { header, selectItem } = props;
    const [itemSelected, setItemSelected] = useState(0);

    return (
        <div className="flex flex-col w-full">
            <div className="w-full flex justify-center  overflow-x-auto pl-16">
                {header?.map((item, i) => (
                    <div
                        key={i}
                        className={`mx-5 cursor-pointer font-bold whitespace-nowrap ${
                            itemSelected === i
                                ? "text-primary "
                                : "text-gray-300"
                        }`}
                        onClick={() => {
                            setItemSelected(i);
                            selectItem(i);
                        }}
                    >
                        {item.title}
                    </div>
                ))}
            </div>
            <div></div>
        </div>
    );
}

export default Tabs;
