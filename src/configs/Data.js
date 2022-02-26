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
        name: "resume",
        icon: <AiOutlineFile />,
    },
    {
        name: "portopolio",
        icon: <AiOutlineProject />,
    },
    {
        name: "services",
        icon: <AiOutlinePicLeft />,
    },
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
