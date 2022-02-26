import React from "react";
import { BaseContainer } from "../../components";

function About() {
    return (
        <BaseContainer>
            <div id="about" className="w-full mb-10 text-gray-400 ">
                <div className="w-full flex flex-col justify-center items-center">
                    <p className="title text-gray-600">About</p>
                    <p className="text-center   my-3">
                        Magnam dolores commodi suscipit. Necessitatibus eius
                        consequatur ex aliquid fuga eum quidem. Sit sint
                        consectetur velit. Quisquam quos quisquam cupiditate. Et
                        nemo qui impedit suscipit alias ea. Quia fugiat sit in
                        iste officiis commodi quidem hic quas
                    </p>
                </div>
                <div className="flex  w-full justify-between text-gray-400">
                    <div className="bg-yellow-500 w-full h-[200px] pr-10"></div>
                    <div className=" w-full h-[200px] pl-10">
                        <div>
                            <ul className="list-disc">
                                <li className="flex">
                                    <p className="w-28 mb-2">Name</p>
                                    <p>{" :   "}Abdul Taupik Permana</p>
                                </li>
                                <li className="flex">
                                    <p className="w-28 mb-2">City</p>
                                    <p>
                                        {" :   "}Sumedang, West Java, Indonesia
                                    </p>
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
                        </div>
                    </div>
                </div>
            </div>
        </BaseContainer>
    );
}

export default About;
