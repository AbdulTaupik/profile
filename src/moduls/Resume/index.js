import React from "react";
import { Section, CardResume } from "../../components";
import {
    mySummary,
    myEducation,
    myExperience,
    myStudying,
} from "../../configs/Data";

function Resume() {
    const renderDescriptoon =
        "As a front-end developer, I have a strong passion for creating beautiful and functional user interfaces.";

    return (
        <Section title="Resume" description={renderDescriptoon} id="resume">
            <div className="w-full flex flex-col md:flex-row justify-between flex-wrap mt-10">
                <div className={`mb-5 w-full w-full md:w-[49%]`}>
                    <CardResume data={mySummary} heading="Summary" />
                    <div className="mt-10" />
                    <CardResume
                        data={myStudying}
                        heading="Currently Studying"
                    />
                    <div className="mt-10" />
                    <CardResume data={myEducation} heading="Education" />
                    <div className="mt-10" />
                </div>
                <div className={`mb-5 w-full md:w-[49%]`}>
                    <CardResume
                        data={myExperience}
                        heading="Professional Experience"
                    />
                    <div className="mt-10" />
                </div>
            </div>
        </Section>
    );
}

export default Resume;
