import React, { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import VisibilitySensor from "react-visibility-sensor";

function CardFact(props) {
    const { data } = props;
    const [visible, setVisible] = useState(false);

    return (
        <div className="flex flex-col w-full ">
            <div className="text-xs font-semibold mb-2">{data?.name}</div>
            <div>
                <ProgressBar
                    completed={data?.range}
                    borderRadius="2px"
                    bgColor="#1f4287"
                    height="12px"
                    isLabelVisible={false}
                    animateOnRender={true}
                />
            </div>
        </div>
    );
}

export default CardFact;
