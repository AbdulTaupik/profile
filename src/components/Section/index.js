import React, { useEffect } from "react";
import { BaseContainer } from "../index";
import AOS from "aos";
import "aos/dist/aos.css";

function Section(props) {
    const { children, title, description, id } = props;

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <BaseContainer id={id}>
            <div
                className="w-full mt-10 md:mt-16 text-gray-400 "
                data-aos="fade-up"
            >
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="flex flex-col items-center">
                        <p className="title  text-gray-600">{title}</p>
                        <div className="h-[2px] w-28 bg-gray-500 flex justify-center items-center rounded-full mt-2 mb-2">
                            <div className="h-[4px] w-16 bg-primary rounded-full"></div>
                        </div>
                    </div>
                    {description ? (
                        <p className="text-center mt-3 mb-10 text-sm sm:text-base ">
                            {description}
                        </p>
                    ) : (
                        ""
                    )}
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
