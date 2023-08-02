import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Hero from "../src/moduls/Hero";
import About from "../src/moduls/About";
import Resume from "../src/moduls/Resume";
import Portopolio from "../src/moduls/Portofolio";
import Services from "../src/moduls/Services";
import Contact from "../src/moduls/Contact";
import Skill from "../src/moduls/Skill";
import Footer from "../src/moduls/Footer";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Abdul Taupik Permana</title>
                <meta name="description" content="Abdul Taupik Permana" />
                <link rel="icon" href="/favicon.ico " />
            </Head>

            <Hero />
            {/* <About /> */}
            <Resume />
            <Skill />
            <Portopolio />
            {/* <Services /> */}
            {/* <Contact /> */}
            {/* <Footer /> */}
        </div>
    );
}
