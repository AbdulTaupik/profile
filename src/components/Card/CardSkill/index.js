import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function CardFact(props) {
    const { data } = props;
    return (
        <div className="flex flex-col w-full">
            <div className="text-xs font-semibold mb-2">{data?.name}</div>
            <div>
                <ProgressBar
                    completed={data?.range}
                    borderRadius="2px"
                    bgColor="#1f4287"
                    height="12px"
                    isLabelVisible={false}
                />
            </div>
        </div>
    );
}

export default CardFact;
