import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as SiIcons from "react-icons/si";
import * as IoIcons from "react-icons/io";
import * as ImIcons from "react-icons/im";
import * as RiIcons from "react-icons/ri";
import * as PiIcons from "react-icons/pi";
import * as MdIcons from "react-icons/md";
import * as LuIcons from "react-icons/lu";
import { useTranslation } from "react-i18next";

export const SidebarData = () => {
    const {t} = useTranslation()
    const dataNav = [
        // مدیریت کاربران
        {
            title: t('dash.sidebar.stuMng'),
            path: "/sudentsList",
            icon: <PiIcons.PiStudentDuotone />,
        },
        {
            title: t('dash.sidebar.stafMng'),
            path: "/stafList",
            icon: <FaIcons.FaChalkboardTeacher />,
        },
        {
            title: t('dash.sidebar.userCategory'),
            path: "/usersList",
            icon: <PiIcons.PiUsersThreeDuotone />,
        },

        //   مدیریت دوره ها
        {
            title: t('dash.sidebar.coursesList'),
            path: "/courses",
            icon: <MdIcons.MdOutlineLibraryBooks />,
        },
        {
            title: t('dash.sidebar.coursesCategory'),
            path: "/courseCategory",
            icon: <BiIcons.BiCategory />,
        },
        {
            title: t('dash.sidebar.discounts'),
            path: "/discounts",
            icon: <MdIcons.MdOutlineDiscount />,
        },

        // مدیریت محتوی
        {
            title: t('dash.sidebar.webPages.title'),
            icon: <SiIcons.SiPagespeedinsights />,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,

            subNav: [
                {
                    title: t('dash.sidebar.webPages.homePage'),
                    path: "/edit/HomePage",
                    icon: <IoIcons.IoIosPaper />,
                    cName: "sub-nav",
                },
                {
                    title: t('dash.sidebar.webPages.courses'),
                    path: "/edit/courses",
                    icon: <IoIcons.IoIosPaper />,
                    cName: "sub-nav",
                },
                {
                    title: t('dash.sidebar.webPages.contactus'),
                    path: "/edit/contact-us",
                    icon: <IoIcons.IoIosPaper />,
                },
                {
                    title: t('dash.sidebar.webPages.aboutus'),
                    path: "/edit/about-us",
                    icon: <IoIcons.IoIosPaper />,
                },
            ],
        },

        //   وبلاگ
        {
            title: t('dash.sidebar.blog.title'),
            icon: <ImIcons.ImBlog />,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,

            subNav: [
                {
                    title: t('dash.sidebar.blog.posts'),
                    path: "/blog/posts",
                    icon: <IoIcons.IoIosPaper />,
                    cName: "sub-nav",
                },
                {
                    title: t('dash.sidebar.blog.tags'),
                    path: "/blog/tags",
                    icon: <IoIcons.IoIosPaper />,
                    cName: "sub-nav",
                },
            ],
        },

        // تنظیمات
        {
            title: t('dash.sidebar.access'),
            path: "/stting/access",
            icon: <LuIcons.LuSettings />,
        },
        {
            title: t('dash.sidebar.setting'),
            path: "/setting",
            icon: <AiIcons.AiFillDashboard />,
        },
    ];

    return dataNav;
};
