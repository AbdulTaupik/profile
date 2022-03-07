import React from "react";
import { Section } from "../../components";

function Portofolio() {
    const renderDescriptoon =
        "Magnam dolores commodi suscipit. Necessitatibus eiusconsequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas";

    return (
        <Section
            title="Portofolio"
            description={renderDescriptoon}
            id="portofolio"
        >
            <div className="w-full h-[500px]"></div>
        </Section>
    );
}

export default Portofolio;
