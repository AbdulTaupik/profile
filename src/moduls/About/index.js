import React from "react";
import { Section } from "../../components";
import { fotoProfile } from "../../configs/Images";
import Image from "next/image";

function About() {
    const resume =
        "I am a frontend developer with more than 2 years of experience, I am used to translating designs into code, I am used to using React js, React Native, Next js, Redux, Restfull Api, Tailwind css and others";
    return (
        <Section title="About" description={""} id="about">
            <div className="flex w-full mt-10 flex-col items-center  md:flex-row md:items-start">
                <div className="flex max-w-[280px] max-h-[280px] ">
                    <Image src={fotoProfile} alt="hero" />
                </div>
                <div className="w-full md:h-[200px] mt-10 md:mt-0 md:pl-10">
                    <div>
                        <ul className="list-disc">
                            <li className="flex">
                                <p className="w-16 md:w-28 mb-2">Name</p>
                                <p>{" :   "}Abdul Taupik Permana</p>
                            </li>
                            <li className="flex">
                                <p className="w-16 md:w-28 mb-2">City</p>
                                <p>{" :   "}Sumedang, West Java, Indonesia</p>
                            </li>
                            <li className="flex">
                                <p className="w-16 md:w-28 mb-2">Email</p>
                                <p>{" :   "}abdultaupik002@gmail.com</p>
                            </li>
                            <li className="flex">
                                <p className="w-16 md:w-28 mb-2">Phone</p>
                                <p>{" :   "}085861764740</p>
                            </li>
                            <li className="flex">
                                <p className="w-16 md:w-28 mb-2">Age</p>
                                <p>{" :   "}25</p>
                            </li>
                            <li className="flex">
                                <p className="w-16 md:w-28 mb-2">Degree</p>
                                <p>
                                    {" :   "}Bachelor ( Computer Engginering )
                                </p>
                            </li>
                        </ul>
                        <div className="mt-7 indent-10 leading-7">{resume}</div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default About;
