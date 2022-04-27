import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import { FiUsers, FiSettings } from "react-icons/fi";

import IconButton from "../IconButton";
import { GetLoggedInUser } from "../../selectors";

import "./SidePanel.css";

const SidePanel = ({ showSidePanel, setShowSidePanel }) => {
    const showSidePanelHandler = () => setShowSidePanel(false);
    const translate = showSidePanel ? "side-panel--open" : "side-panel--close";
    const loggedInUser = GetLoggedInUser();

    return (
        <div className={`side-panel ${translate}`}>
            <div className="side-panel__icon">
                <IconButton Icon={CgMenuRight} onClick={showSidePanelHandler} />
            </div>
            <Link className="side-panel__link" to="/">
                <FaTasks />
                <span className="side-panel__link__text">Todo</span>
            </Link>
            {loggedInUser?.userType === "admin" ? (
                <>
                    <Link className="side-panel__link" to="/users">
                        <FiUsers />
                        <span className="side-panel__link__text">Users</span>
                    </Link>
                    <Link className="side-panel__link" to="/settings">
                        <FiSettings />
                        <span className="side-panel__link__text">Settings</span>
                    </Link>{" "}
                </>
            ) : null}
        </div>
    );
};

export default SidePanel;
