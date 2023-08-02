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
            className="hidden md:flex fixed text-red-500  h-full items-center left-5"
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
                        className={` my-2 flex items-center rounded-full   `}
                    >
                        <div
                            className={`${
                                item.name === currentSection
                                    ? "bg-primary text-white"
                                    : "bg-gray-200 text-gray-500"
                            }   cursor-pointer menu-icon  h-12 w-12  flex items-center justify-center transition-30 rounded-full hover:bg-primary hover:text-white`}
                        >
                            {item.icon}
                        </div>
                        <div className="pl-2 menu-title bg-primary text-white">
                            {item.name}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Menu;
