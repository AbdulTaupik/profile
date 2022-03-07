import React from "react";
import { Section, CardFact, CardSkill } from "../../components";
import { ListSkill } from "../../configs/Data";

function Skill() {
    const renderDescription =
        "Magnam dolores commodi suscipit. Necessitatibus eiusconsequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas";

    return (
        <Section title="SKILL" description={renderDescription} id="skill">
            <div className="w-full flex justify-between flex-wrap">
                {ListSkill.map((item, i) => (
                    <div key={i} className={`mb-5 w-full md:w-[49%]`}>
                        <CardSkill data={item} />
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default Skill;
