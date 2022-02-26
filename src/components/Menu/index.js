import React, { useState } from "react";
import { ListMenu } from "../../configs/Data";
import { Link } from "react-scroll";

function Menu() {
    const [currentSection, setCurrentSection] = useState("Home");
    const handleSetActive = (value) => {
        setCurrentSection(value);
    };
    const handleSetInactive = (value) => {
        console.log("inactive", value);
    };
    return (
        <div
            className="fixed text-red-500  h-full flex items-center left-5"
            style={{ zIndex: 50 }}
        >
            <div className="flex flex-col ">
                {ListMenu.map((item, i) => (
                    <Link
                        activeClass="active"
                        to={item.name}
                        spy={true}
                        smooth={true}
                        key={i}
                        onSetActive={handleSetActive}
                        onSetInactive={handleSetInactive}
                        className={`${
                            item.name === currentSection
                                ? "bg-primary text-white"
                                : "bg-gray-200 text-primary"
                        }  mb-5 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer hover:bg-primary hover:text-white`}
                    >
                        {item.icon}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Menu;
