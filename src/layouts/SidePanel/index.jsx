//custom
import IconButton from "../../components/IconButton";
import { useUser } from "../../context/UserContext";
//third
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineHome, HiOutlineUsers, HiOutlineLogout } from "react-icons/hi";
//css
import "./SidePanel.css";

const SidePanel = ({ showSidePanel, setShowSidePanel }) => {
    const showSidePanelHandler = () => setShowSidePanel(false);
    const translate = showSidePanel ? "side-panel--open" : "side-panel--close";
    const { loggedInUser, logoutUser } = useUser();

    const logoutHandler = () => {
        logoutUser();
    };
    return (
        <>
            <div className={`side-panel ${translate}`}>
                <div className="side-panel__menu__header">
                    <Link
                        to="/"
                        className="font-Major text-3xl"
                        onClick={showSidePanelHandler}
                    >
                        TASKER
                    </Link>
                    <div className="side-panel__menu__icon">
                        <IconButton
                            Icon={AiOutlineClose}
                            onClick={showSidePanelHandler}
                        />
                    </div>
                </div>
                <div className="side-panel__navbar">
                    <div>
                        <Link
                            className="side-panel__link"
                            to="/"
                            onClick={showSidePanelHandler}
                        >
                            <HiOutlineHome className="side-panel__icon" />
                            <span className="side-panel__link__text">
                                Dashboard
                            </span>
                        </Link>
                    </div>
                    <div className="mb-5">
                        <Link
                            className="side-panel__link"
                            to="/settings"
                            onClick={showSidePanelHandler}
                        >
                            <FiSettings className="side-panel__icon" />
                            <span className="side-panel__link__text">
                                Settings
                            </span>
                        </Link>
                        <Link
                            className="side-panel__link"
                            to="/login"
                            onClick={() => {
                                logoutHandler();
                                showSidePanelHandler();
                            }}
                        >
                            <HiOutlineLogout className="side-panel__icon" />
                            <span className="side-panel__link__text">
                                Logout
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            {showSidePanel && (
                <div
                    onClick={showSidePanelHandler}
                    className="fixed flex justify-center items-center bg-black w-screen h-full top-0 left-0 bg-opacity-50 z-30"
                ></div>
            )}
        </>
    );
};

export default SidePanel;
