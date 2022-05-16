//custom
import IconButton from "../../components/IconButton";
import { logoutUser } from "../../redux/usersSlice";
import { GetLoggedInUser } from "../../selectors";
//third
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { HiOutlineHome, HiOutlineUsers, HiOutlineLogout } from "react-icons/hi";
//css
import "./SidePanel.css";

const SidePanel = ({ showSidePanel, setShowSidePanel }) => {
    const dispatch = useDispatch();

    const showSidePanelHandler = () => setShowSidePanel(false);
    const translate = showSidePanel ? "side-panel--open" : "side-panel--close";
    const loggedInUser = GetLoggedInUser();

    const logoutHandler = () => dispatch(logoutUser());

    return (
        <div className={`side-panel ${translate}`}>
            <div className="side-panel__menu__header">
                <Link to="/" className="font-Major text-3xl ">
                    TASKER
                </Link>
                <div className="side-panel__menu__icon">
                    <IconButton
                        Icon={CgMenuRight}
                        onClick={showSidePanelHandler}
                    />
                </div>
            </div>
            <div className="side-panel__navbar">
                <div>
                    <Link className="side-panel__link" to="/">
                        <HiOutlineHome className="side-panel__icon" />
                        <span className="side-panel__link__text">
                            Dashboard
                        </span>
                    </Link>
                    {loggedInUser?.userType === "admin" && (
                        <>
                            <Link className="side-panel__link" to="/users">
                                <HiOutlineUsers className="side-panel__icon" />
                                <span className="side-panel__link__text">
                                    Team
                                </span>
                            </Link>
                        </>
                    )}
                </div>
                <div className="mb-5">
                    <Link className="side-panel__link" to="/settings">
                        <FiSettings className="side-panel__icon" />
                        <span className="side-panel__link__text">Settings</span>
                    </Link>
                    <Link
                        className="side-panel__link"
                        to="/login"
                        onClick={logoutHandler}
                    >
                        <HiOutlineLogout className="side-panel__icon" />
                        <span className="side-panel__link__text">Logout</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SidePanel;
