import React from "react";

function BaseContainer(props) {
    const { children } = props;
    return (
        <div className="w-full flex justify-center">
            <div className="max-w-[1360px] w-full px-16">{children}</div>
        </div>
    );
}

export default BaseContainer;
