import { useEffect, useState } from "react";
//custom
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useUser } from "../../context/UserContext";
//third
import { FaTrash, FaPaperPlane } from "react-icons/fa";
//css
import "./SettingsUserUpdateForm.css";
import { useDispatch } from "react-redux";
import {
    removeParticipantFromProject,
    updateCurrentProject,
} from "../../redux/projectsSlice";
import { SelectProjectById, SelectProjectsByUserId } from "../../selectors";
import Modal from "../../components/Modal";
import DialogBox from "../../components/Modal/DialogBox";

const SettingsUserUpdateForm = ({ user }) => {
    const [updateForm, setUpdateForm] = useState({
        username: user.username,
        email: user.email,
    });
    const [showModal, setShowModal] = useState(false);
    const { updateUser, loggedInUser } = useUser();
    const dispatch = useDispatch();
    const currentProject = SelectProjectById(loggedInUser.currentProject);

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

    const removeUserHandler = (user) => {
        dispatch(
            removeParticipantFromProject({
                projectId: currentProject.id,
                participantId: user.id,
            })
        );

        setUpdateForm(() => ({ username: "", email: "" }));
    };

    return (
        <div className="settings-user-update">
            <div className="settings-user-update__header">
                <div className="settings-user-update__header__text">
                    Update User
                </div>
            </div>
            {user?.id === loggedInUser.id && (
                <div className="settings-user-update__inputs">
                    <Input
                        value={updateForm.username}
                        onChange={formChangeHandler}
                        placeholder="Username"
                        name="username"
                        className="settings-user-update__input__username mt-3"
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
                {user.id !== loggedInUser.id && (
                    <Button
                        onClick={() => setShowModal(true)}
                        variant="danger"
                        className="settings-user-update__remove w-full"
                    >
                        <FaTrash />
                        <span>Delete User</span>
                    </Button>
                )}
                {user.id === loggedInUser.id && (
                    <Button
                        variant="primary"
                        onClick={updateUserHandler}
                        className="settings-user-update__update w-full"
                    >
                        <FaPaperPlane />
                        <span>Update</span>
                    </Button>
                )}
            </div>
            {showModal && (
                <Modal showModal={setShowModal}>
                    <DialogBox
                        text={`Are you sure you want to remove ${user.username} from the project?`}
                        setCancelButton={() => setShowModal(false)}
                        setConfirmButton={() => removeUserHandler(user)}
                    />
                </Modal>
            )}
        </div>
    );
};

export default SettingsUserUpdateForm;
