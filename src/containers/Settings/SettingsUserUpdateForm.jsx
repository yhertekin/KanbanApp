import { useEffect, useState } from "react";
//custom
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useUser } from "../../context/UserContext";
//third
import { FaTrash, FaPaperPlane } from "react-icons/fa";
//css
import "./SettingsUserUpdateForm.css";

const SettingsUserUpdateForm = ({ user, setShowUpdateUser }) => {
    const [updateForm, setUpdateForm] = useState({
        username: user.username,
        email: user.email,
    });

    const { updateUser, removeUser } = useUser();

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
        updateUser({ userId: user.id, updateForm: updateForm });
        setUpdateForm(() => ({ username: "", email: "" }));
    };

    const removeUserHandler = () => {
        removeUser(user.id);
        setUpdateForm(() => ({ username: "", email: "" }));
    };

    return (
        <div className="settings-user-update">
            <div className="settings-user-update__header">
                <div className="settings-user-update__header__text">
                    Update User
                </div>
            </div>
            {user && (
                <div className="settings-user-update__inputs">
                    <Input
                        value={updateForm.username}
                        onChange={formChangeHandler}
                        placeholder="Username"
                        name="username"
                        className="settings-user-update__input__username"
                    />
                    <Input
                        value={updateForm.email}
                        onChange={formChangeHandler}
                        placeholder="Email"
                        name="email"
                        className="settings-user-update__input__email"
                    />
                </div>
            )}
            <div className="flex justify-between">
                <Button
                    onClick={removeUserHandler}
                    variant="danger"
                    className="settings-user-update__remove"
                >
                    <FaTrash className="text-xl" />
                    <span>Delete User</span>
                </Button>
                <Button
                    variant="primary"
                    onClick={updateUserHandler}
                    className="settings-user-update__update"
                >
                    <FaPaperPlane />
                    <span>Update</span>
                </Button>
            </div>
        </div>
    );
};

export default SettingsUserUpdateForm;
