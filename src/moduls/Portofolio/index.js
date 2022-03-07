import React, { useState } from "react";
import { Section, Tabs, CardPortopolio } from "../../components";
import { headPortopolio, myPortopolioWeb } from "../../configs/Data";

function Portofolio() {
    const [indexItem, setIndexItem] = useState(0);
    const renderDescriptoon =
        "Magnam dolores commodi suscipit. Necessitatibus eiusconsequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas";

    const portofolioWeb = () => {
        return (
            <div className="flex w-fullflex flex-wrap justify-around mt-16">
                {myPortopolioWeb?.map((item, i) => (
                    <div key={i} className="mb-5 md:mb-24">
                        <CardPortopolio data={item} />
                    </div>
                ))}
            </div>
        );
    };
    const portofolioApps = () => {
        return (
            <div className="flex w-fullflex flex-wrap justify-around mt-16">
                {myPortopolioWeb?.map((item, i) => (
                    <div key={i} className="mb-5 md:mb-24">
                        <CardPortopolio data={item} />
                    </div>
                ))}
            </div>
        );
    };
    const portofolioUiUx = () => {
        return (
            <div className="flex w-fullflex flex-wrap justify-around mt-16">
                {myPortopolioWeb?.map((item, i) => (
                    <div key={i} className="mb-5 md:mb-24">
                        <CardPortopolio data={item} />
                    </div>
                ))}
            </div>
        );
    };

    const content = () => {
        switch (indexItem) {
            case 0:
                return portofolioWeb();
                break;
            case 1:
                return portofolioApps();
                break;
            case 2:
                return portofolioUiUx();
                break;
            default:
                return portofolioWeb();
        }
    };

    const selectItem = (value) => {
        setIndexItem(value);
    };

    return (
        <Section
            title="Portofolio"
            description={renderDescriptoon}
            id="portofolio"
        >
            <Tabs header={headPortopolio} selectItem={selectItem} />
            {content()}
        </Section>
    );
}

export default Portofolio;
