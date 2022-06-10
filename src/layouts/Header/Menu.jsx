//custom
import IconButton from "../../components/IconButton";
import { useUser } from "../../context/UserContext";
//third
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { useState } from "react";
import Notifications from "../../containers/Notifications/Notifications";

//css

const Menu = ({ setShowMenu }) => {
    const stopClosing = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const [showNotifications, setShowNotifications] = useState(false);

    const { loggedInUser, logoutUser } = useUser();

    const logoutHandler = () => logoutUser();
    const showMenuHandler = () => setShowMenu(false);

    const notificationCount = loggedInUser.notifications.length;
    const NotificationIcon = () => (
        <IconButton
            Icon={MdNotifications}
            className="text-4xl"
            onClick={() => setShowNotifications((prevState) => !prevState)}
        />
    );

    return (
        <div onClick={stopClosing} className="header__menu">
            <div className="header__menu__item">
                <span>Account</span>
                <IconButton
                    Icon={AiOutlineClose}
                    variant="black"
                    className="ml-auto text-xl"
                    onClick={showMenuHandler}
                />
            </div>
            <div className="header__menu__item">
                <Link
                    to={`/profile/${loggedInUser.id}`}
                    className="header__menu__item__profile"
                >
                    <FaUserAlt />
                </Link>
                <div className="text-sm ml-2">
                    <div>{loggedInUser.username}</div>
                    <div>{loggedInUser.email}</div>
                </div>
                <div className="ml-auto relative">
                    <NotificationIcon />
                    {notificationCount > 0 && (
                        <div className="font-bold text-sm text-white bg-red-500 rounded-full w-5 h-5 flex justify-center items-center absolute -top-1 -right-1 border-white border-2">
                            <div>
                                {notificationCount > 10
                                    ? "!"
                                    : notificationCount}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {showNotifications && <Notifications />}
            <div className="py-4" onClick={showMenuHandler}>
                <Link
                    to="/login"
                    onClick={logoutHandler}
                    className="text-lg text-gray-600 hover:bg-gray-200 py-2 px-4 rounded-lg"
                >
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default Menu;
