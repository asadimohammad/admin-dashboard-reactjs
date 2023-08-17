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

export const SidebarData = [
    // مدیریت کاربران
    {
        title: "مدیریت دانشجویان",
        path: "/",
        icon: <PiIcons.PiStudentDuotone />,
    },
    {
        title: "مدیریت اساتید",
        path: "/",
        icon: <FaIcons.FaChalkboardTeacher />,
    },
    {
        title: "دسته بندی کاربران",
        path: "/",
        icon: <PiIcons.PiUsersThreeDuotone />,
    },

    //   مدیریت دوره ها
    {
        title: "لیست دوره ها",
        path: "/",
        icon: <MdIcons.MdOutlineLibraryBooks />,   
    },
    {
        title: "دسته بندی دوره ها",
        path: "/",
        icon: <BiIcons.BiCategory />,
    },
    {
        title: "مدیریت تخفیف ها",
        path: "/",
        icon: <MdIcons.MdOutlineDiscount />,
    },

    // مدیریت محتوی
    {
        title: "صفحات سایت",
        path: "/",
        icon: <SiIcons.SiPagespeedinsights />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "صفحه اصلی",
                path: "/",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "صفحه دوره ها",
                path: "/",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "صفحه تماس با ما",
                path: "/",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "صفحه درباره ما",
                path: "/",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },

    //   وبلاگ
    {
        title: "وبلاگ",
        path: "/",
        icon: <ImIcons.ImBlog />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "پست ها",
                path: "/",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "برچسب ها",
                path: "/",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
        ],
    },

    // تنظیمات
    {
        title: "تنظیم دسترسی ها",
        path: "/",
        icon: <LuIcons.LuSettings />,
    },
    {
        title: "تنظیمات داشبورد",
        path: "/",
        icon: <AiIcons.AiFillDashboard />,
    },
];
