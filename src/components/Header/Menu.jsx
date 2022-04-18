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
    return (
        <div onClick={stopClosing} className="header__menu">
            <div className="header__menu__item">
                <span>Account</span>
                <IconButton
                    Icon={AiOutlineClose}
                    variant="black"
                    className="ml-auto"
                    onClick={() => setShowMenu(false)}
                />
            </div>
            <div className="header__menu__item">
                <div className="header__menu__item__profile">
                    <Link to={`/profile/${loggedInUser.id}`}>
                        <IconButton Icon={FaUserAlt} />
                    </Link>
                </div>
                <div className="text-sm ml-2">
                    <div>{loggedInUser.username}</div>
                    <div>{loggedInUser.email}</div>
                </div>
            </div>
            <div className="py-4" onClick={() => setShowMenu(false)}>
                <Link to="/login" onClick={() => dispatch(logoutUser())}>
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default Menu;
