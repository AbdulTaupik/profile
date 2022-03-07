import React, { useState } from "react";

function Tabs(props) {
    const { header, selectItem } = props;
    const [itemSelected, setItemSelected] = useState(0);

    return (
        <div className="flex flex-col w-full">
            <div className="w-full flex justify-center">
                {header?.map((item, i) => (
                    <div
                        key={i}
                        className={`mx-5 cursor-pointer font-bold ${
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
