import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FaTimes, FaTrash, FaPaperPlane } from "react-icons/fa";

import { updateUser, removeUser } from "../../redux/usersSlice";
import IconButton from "../IconButton";
import Input from "../Input";

import "./SettingsUserUpdate.css";
import Button from "../Button";

const SettingsUserUpdate = ({ user, setShowUpdateUser }) => {
    const dispatch = useDispatch();
    const [updateForm, setUpdateForm] = useState({
        username: user.username,
        email: user.email,
    });

    useEffect(() => {
        setUpdateForm({ username: user.username, email: user.email });
    }, [user]);

    const formChangeHandler = (e) => {
        setUpdateForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const updateUserHandler = () => {
        dispatch(updateUser({ id: user.id, ...updateForm }));
        setUpdateForm(() => ({ username: "", email: "" }));
    };

    const removeUserHandler = () => {
        dispatch(removeUser(user.id));
        setUpdateForm(() => ({ username: "", email: "" }));
    };

    const CloseIcon = () => (
        <IconButton
            Icon={FaTimes}
            onClick={() => setShowUpdateUser(false)}
            variant="danger"
            className="text-xl ml-auto mt-2 mb-2"
        />
    );

    return (
        <div className="settings__user__update">
            <div className="flex">
                <div className="text-2xl mb-3">Update User</div>
                <CloseIcon />
            </div>
            {user && (
                <div className="settings__user__update__inputs">
                    <Input
                        value={updateForm.username}
                        onChange={formChangeHandler}
                        placeholder="Username"
                        name="username"
                        className="settings__user__update__input__username"
                    />
                    <Input
                        value={updateForm.email}
                        onChange={formChangeHandler}
                        placeholder="Email"
                        name="email"
                        className="settings__user__update__input__email"
                    />
                </div>
            )}
            <div className="flex justify-between">
                <Button
                    variant="primary"
                    onClick={updateUserHandler}
                    className="settings__user__update__update"
                >
                    <FaPaperPlane />
                    <span>Update</span>
                </Button>
                <Button
                    onClick={removeUserHandler}
                    variant="danger"
                    className="settings__user__update__remove"
                >
                    <FaTrash className="text-xl" />
                    <span>Delete User</span>
                </Button>
            </div>
        </div>
    );
};

export default SettingsUserUpdate;
