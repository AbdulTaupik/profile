import React from "react";
import { Section, CardResume } from "../../components";
import { mySummary, myEducation, myExperience } from "../../configs/Data";

function Resume() {
    const renderDescriptoon =
        "Magnam dolores commodi suscipit. Necessitatibus eiusconsequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas";

    return (
        <Section title="Resume" description={renderDescriptoon} id="resume">
            <div className="w-full flex justify-between flex-wrap">
                <div className={`mb-5 w-[49%]`}>
                    <CardResume data={mySummary} heading="Summary" />
                    <div className="mt-10" />
                    <CardResume data={myEducation} heading="Education" />
                    <div className="mt-10" />
                </div>
                <div className={`mb-5 w-[49%]`}>
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
