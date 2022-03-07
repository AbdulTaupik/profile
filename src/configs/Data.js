import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineFile,
    AiOutlineProject,
    AiOutlineMail,
    AiOutlinePicLeft,
} from "react-icons/ai";

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

export const ListMenu = [
    {
        name: "home",
        icon: <AiOutlineHome />,
    },
    {
        name: "about",
        icon: <AiOutlineUser />,
    },
    {
        name: "skill",
        icon: <AiOutlineFile />,
    },
    {
        name: "resume",
        icon: <AiOutlineFile />,
    },
    {
        name: "portofolio",
        icon: <AiOutlineProject />,
    },
    // {
    //     name: "services",
    //     icon: <AiOutlinePicLeft />,
    // },
    {
        name: "contact",
        icon: <AiOutlineMail />,
    },
];

export const ListSosmed = [
    {
        name: "twitter",
        icon: <FaTwitter />,
    },
    {
        name: "facebook",
        icon: <FaFacebookF />,
    },
    {
        name: "instagram",
        icon: <FaInstagram />,
    },
    {
        name: "facebook",
        icon: <FaLinkedin />,
    },
];

export const ListFact = [
    {
        title: "40",
        icon: <FaTwitter />,
        description: "Happy Clients",
    },
    {
        title: "40",
        icon: <FaTwitter />,
        description: "Happy Clients",
    },
    {
        title: "40",
        icon: <FaTwitter />,
        description: "Happy Clients",
    },
    {
        title: "40",
        icon: <FaTwitter />,
        description: "Happy Clients",
    },
];

export const ListSkill = [
    {
        icon: <FaTwitter />,
        name: "HTML",
    },
    {
        icon: <FaTwitter />,
        name: "CSS",
    },
    {
        icon: <FaTwitter />,
        name: "GIT",
    },
    {
        icon: <FaTwitter />,
        name: "Javascript",
    },

    {
        icon: <FaTwitter />,
        name: "React JS",
    },
    {
        icon: <FaTwitter />,
        name: "React Native",
    },
    {
        icon: <FaTwitter />,
        name: "Next Js",
    },
    {
        icon: <FaTwitter />,
        name: "Tailwind CSS",
    },
    {
        icon: <FaTwitter />,
        name: "Bootstrap 4",
    },
    {
        icon: <FaTwitter />,
        name: "Material UI",
    },
    {
        icon: <FaTwitter />,
        name: "Shopify",
    },
    {
        icon: <FaTwitter />,
        name: "MySql",
    },
    {
        icon: <FaTwitter />,
        name: "Mongo DB",
    },
    {
        icon: <FaTwitter />,
        name: "PHP",
    },
    {
        icon: <FaTwitter />,
        name: "Codeigniter",
    },
];

export const mySummary = [
    {
        title: "Abdul Taupik Permana",
        description:
            "I am frontend developer , i have worked on several website and app development project. The technology used is using React Js, Next Js, React Native, as well as using restfull api ",
        items: ["25 Year", "085861764740", "abdultaupik002@gmail.com"],
    },
];

export const myEducation = [
    {
        title: "SDN Darongdong",
        date: "2003 (Jul) - 2009 (Sep)",
        address: "Sumedang, Jawa Barat",
    },
    {
        title: "SMPN 1 Buahdua",
        date: "2009 (Jul) - 2012 (Sep)",
        address: "Sumedang, Jawa Barat",
        information: [
            { items: { label: "Ekstrakurikuler", value: "Computer" } },
        ],
    },
    {
        title: "SMAN Conggeang",
        date: "2012 (Jul) - 2015 (Sep)",
        address: "Sumedang, Jawa Barat",
        information: [
            {
                items: { label: "Major", value: "IPA" },
            },
            { items: { label: "Organization", value: "Paskibra" } },
        ],
    },
    {
        title: "UNIKOM",
        date: "2015 (Jul) - 2019 (Sep)",
        address: "Bandung, Jawa Barat",
        information: [
            {
                items: { label: "Major", value: "Computer Engginering" },
            },
            { items: { label: "Organization", value: " HIMA" } },
        ],
    },
];

export const myExperience = [
    {
        title: "Politeknik Piksi Ganesa",
        date: "2020 (Jan) - 2020 (March)",
        address: "Bandung, Jawa Barat",
        items: [
            "Building Dashboard University",
            "Use Codeigniter and Bootstap 4",
        ],
    },
    {
        title: "PT Barrans Global Mandiri",
        date: "2020 (Mei) - 2020 (Jul)",
        address: "Bandung, Jawa Barat",
        items: ["Layouting home page toko awadah app", "Use React Native"],
    },
    {
        title: "PT Kulego Tiga Kreasi",
        date: "2020 (Aug) - 2021 (Jul)",
        address: "Bandung, Jawa Barat",
        items: [
            "Layouting kulegobiz.com ( Dashboard) ",
            "Use React Js, Restfull Api ,Redux and ReactStrap ( kulegobiz.com )",
            "Layouting mantis.co.id ",
            "Use Next Js, Restfull Api ,Redux and Tailwind Css ( mantis.co.id )",
            "Layouting mandalafinance.id ",
            "Use Next Js, Restfull Api ,Redux and Tailwind Css ( mandalafinance.id )",
            "Layouting daftarkpm.mantis.id  ",
            "Use React Js, Redux and Restfull Api  ( kulegobiz.com )",
        ],
    },
    {
        title: "Ctscope",
        date: "2021 (Aug) - 2022 (Jan)",
        address: "Bandung, Jawa Barat",
        items: [
            "Layouting Web Cdoctor (Dasboard)",
            "Use React Js, Restfull Api ,Redux and Tailwind Css ( cdoctor)",
            "Layouting ctscope.id ",
            "Use Next Js, Restfull Api ,Redux and Tailwind Css ( ctscope.id )",
        ],
    },
    {
        title: "PT Boleh Dicoba Digital",
        date: "2021 (Feb) - 2022 (Present)",
        address: "Bandung, Jawa Barat",
        items: ["Building oslo website)", "Use Shopify"],
    },
];
