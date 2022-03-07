import React from "react";
import { BaseContainer } from "../index";

function Section(props) {
    const { children, title, description, id } = props;
    return (
        <BaseContainer>
            <div id={id} className="w-full mt-10 md:mt-16 text-gray-400 ">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="flex flex-col items-center">
                        <p className="title text-gray-600">{title}</p>
                        <div className="h-[2px] w-28 bg-gray-500 flex justify-center items-center rounded-full mt-2 mb-2 sm:mb-10">
                            <div className="h-[4px] w-16 bg-primary rounded-full"></div>
                        </div>
                    </div>
                    <p className="text-center my-5">{description}</p>
                </div>
                {children}
            </div>
        </BaseContainer>
    );
}

Section.defaultProps = {
    title: "title",
    description: "description",
};

export default Section;
