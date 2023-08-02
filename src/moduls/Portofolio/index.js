import { useState } from "react";
import { CardPortopolio, Section } from "../../components";
import { myAllPortopolio } from "../../configs/Data";

function Portofolio() {
    const renderDescriptoon =
        "Magnam dolores commodi suscipit. Necessitatibus eiusconsequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas";

    // const selectItem = (value) => {
    //     setIndexItem(value);
    // };

    return (
        <Section
            title="Portofolio"
            description={renderDescriptoon}
            id="portofolio"
        >
            {/* <Tabs header={headPortopolio} selectItem={selectItem} /> */}
            <div className="flex w-full flex flex-wrap mt-16">
                {myAllPortopolio?.map((item, i) => (
                    <div
                        key={i}
                        className="w-[50%] sm:w-[33.33%] p-[2%] sm:p-[0.5%] mb-10"
                    >
                        <CardPortopolio data={item} />
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default Portofolio;
