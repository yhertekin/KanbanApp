import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

import IconButton from "../../components/IconButton";
import { logoutUser } from "../../redux/usersSlice";
import { GetLoggedInUser } from "../../selectors";

const Menu = ({ setShowMenu }) => {
    const loggedInUser = GetLoggedInUser();
    const dispatch = useDispatch();

    const stopClosing = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const showMenuHandler = () => setShowMenu(false);
    const logoutHandler = () => dispatch(logoutUser());

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
            </div>
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
