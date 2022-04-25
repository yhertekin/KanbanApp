import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

import IconButton from "../IconButton";
import { logoutUser } from "../../redux/usersSlice";

const Menu = ({ setShowMenu }) => {
    const loggedInUser = useSelector((state) => state.users.loggedInUser);
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
                <Link to="/login" onClick={logoutHandler}>
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default Menu;
