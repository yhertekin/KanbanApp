//custom
import IconButton from "../../components/IconButton";
import { useUser } from "../../context/UserContext";
//third
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { useEffect, useState } from "react";
import { HiOutlineLogout } from "react-icons/hi";
import Notifications from "../../containers/Notifications/Notifications";

//css

const Menu = ({ setShowMenu }) => {
    const stopClosing = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const [showNotifications, setShowNotifications] = useState(false);

    const { loggedInUser, logoutUser, updateUser } = useUser();

    const logoutHandler = () => logoutUser();
    const showMenuHandler = () => setShowMenu(false);

    console.log("menu loggedinuser: ", loggedInUser);

    const [notificationCount, setNotificationCount] = useState(
        loggedInUser.notifications.length
    );

    useEffect(() => {
        setNotificationCount(loggedInUser.notifications.length);
    }, [loggedInUser.notifications.length]);

    const NotificationIcon = () => (
        <IconButton
            Icon={MdNotifications}
            className="text-3xl"
            onClick={() => setShowNotifications((prevState) => !prevState)}
        />
    );

    return (
        <div onClick={stopClosing} className="header__menu">
            <div className="header__menu__item">
                <IconButton
                    Icon={AiOutlineClose}
                    variant="black"
                    className="ml-auto text-xl"
                    onClick={showMenuHandler}
                />
            </div>
            <div className="header__menu__item border-t">
                <div className="header__menu__item__profile ">
                    <FaUserAlt />
                </div>
                <div className="text-sm ml-4">
                    <div>{loggedInUser.username}</div>
                    <div>{loggedInUser.email}</div>
                </div>
                <div className="ml-auto relative">
                    <NotificationIcon />
                    {notificationCount > 0 && (
                        <div className="font-bold text-sm text-white bg-red-500 rounded-full w-5 h-5 flex justify-center items-center absolute -top-2 -right-1 border-white border-2">
                            <div>
                                {notificationCount > 10
                                    ? "!"
                                    : notificationCount}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {showNotifications && notificationCount > 0 && (
                <Notifications className="flex-col border-t" />
            )}
            <div className="border-t  " onClick={showMenuHandler}>
                <Link
                    to="/login"
                    onClick={logoutHandler}
                    className="flex justify-start items-center text-lg my-2 text-gray-600 hover:bg-gray-200 py-2 px-4 rounded-lg"
                >
                    <HiOutlineLogout className="text-2xl mr-2" />
                    <span>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Menu;
