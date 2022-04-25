import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdCreate } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";

import IconButton from "../IconButton";
import Button from "../Button";
import TodoInput from "../TodoInput";
import Modal from "../Modal";

import "./SidePanel.css";

const SidePanel = ({ showSidePanel, setShowSidePanel }) => {
    const showSidePanelHandler = () => setShowSidePanel(false);
    const translate = showSidePanel ? "translate-x-full" : "translate-x-0";

    return (
        <div className={`side-panel ${translate}`}>
            <div className="side-panel__icon">
                <IconButton Icon={CgMenuRight} onClick={showSidePanelHandler} />
            </div>
            <Link className="side-panel__link" to="/">
                <FaTasks />
                <span className="side-panel__link__text">Todo</span>
            </Link>
            <Link className="side-panel__link" to="/users">
                <FiUsers />
                <span className="side-panel__link__text">Users</span>
            </Link>

            {/* <div className="p-10">
                <button className="w-32 h-12 border-b-0 border-r-0 border-t border-l border-t-emerald-400 border-l-emerald-400 bg-gradient-to-r from-emerald-400 to-blue-500 flex justify-center items-center py-2 rounded-xl">
                    <FaCloudDownloadAlt className="text-2xl text-white mr-1" />
                    <span className="ml-1 font-bold">Button</span>
                </button>
            </div> */}
        </div>
    );
};

export default SidePanel;
