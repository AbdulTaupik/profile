import React, { useState } from "react";
import { Section, CardSkillImage } from "../../components";
import { ListSkillImage } from "../../configs/Data";

function Skill() {
    const renderDescription =
        "The following are the skills that I have until now";

    return (
        <Section title="SKILL" description={renderDescription} id="skill">
            <div className="w-full flex justify-start flex-wrap">
                {ListSkillImage.map((item, i) => (
                    <div key={i} className={`mb-2 w-[19%] mx-[0.5%]`}>
                        <CardSkillImage data={item} />
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default Skill;
