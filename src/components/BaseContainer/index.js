import React from "react";

function BaseContainer(props) {
    const { children, id } = props;
    return (
        <div id={id} className="w-full flex justify-center">
            <div className="max-w-[1300px] w-full px-8 sm:px-20">
                {children}
            </div>
        </div>
    );
}

export default BaseContainer;
