import React from "react";
import { Section, CardFact, CardSkill } from "../../components";
import { fotoProfile } from "../../configs/Images";
import Image from "next/image";
import { ListFact, ListSkill } from "../../configs/Data";

function About() {
    const renderDescription =
        "Magnam dolores commodi suscipit. Necessitatibus eiusconsequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas";

    const renderDescriptionfact =
        "Magnam dolores commodi suscipit. Necessitatibus eiusconsequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas";

    return (
        <Section title="About" description={renderDescription} id="about">
            <div className="flex w-full mt-10">
                <div className="flex max-w-[340px] max-h-[340px]">
                    <Image src={fotoProfile} alt="hero" />
                </div>
                <div className="w-full h-[200px] pl-10">
                    <div>
                        <ul className="list-disc">
                            <li className="flex">
                                <p className="w-28 mb-2">Name</p>
                                <p>{" :   "}Abdul Taupik Permana</p>
                            </li>
                            <li className="flex">
                                <p className="w-28 mb-2">City</p>
                                <p>{" :   "}Sumedang, West Java, Indonesia</p>
                            </li>
                            <li className="flex">
                                <p className="w-28 mb-2">Email</p>
                                <p>{" :   "}abdultaupik002@gmail.com</p>
                            </li>
                            <li className="flex">
                                <p className="w-28 mb-2">Phone</p>
                                <p>{" :   "}087788535979</p>
                            </li>
                            <li className="flex">
                                <p className="w-28 mb-2">Age</p>
                                <p>{" :   "}25</p>
                            </li>
                            <li className="flex">
                                <p className="w-28 mb-2">Degree</p>
                                <p>{" :   "}Bachelor</p>
                            </li>
                        </ul>
                        <div className="mt-7 indent-10 leading-7">
                            {renderDescription}
                        </div>
                    </div>
                </div>
            </div>
            {/* <Section
                title="FACTS"
                description={renderDescriptionfact}
                id="about"
            >
                <div className="w-full flex justify-between mt-16">
                    {ListFact.map((item, i) => (
                        <CardFact key={i} data={item} />
                    ))}
                </div>
            </Section> */}
        </Section>
    );
}

export default About;
