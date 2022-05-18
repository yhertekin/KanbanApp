import { useEffect, useState } from "react";
//custom
import Button from "../../components/Button";
import Input from "../../components/Input";
import IconButton from "../../components/IconButton";
import { updateProject, removeProject } from "../../redux/projectsSlice";
//third
import { useDispatch } from "react-redux";
import { FaTimes, FaTrash, FaPaperPlane } from "react-icons/fa";
//css
import "./SettingsUserUpdateForm.css";

const SettingsProjectUpdateForm = ({ project, setShowUpdateProject }) => {
    const dispatch = useDispatch();
    const [updateForm, setUpdateForm] = useState({
        name: project.name,
    });

    // useEffect(() => {
    //     setUpdateForm({ name: project.name });
    // }, [project]);

    const formChangeHandler = (e) => {
        setUpdateForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const updateProjectHandler = () => {
        dispatch(updateProject({ id: project.id, ...updateForm }));
        setUpdateForm(() => ({ name: "" }));
    };

    const removeProjectHandler = () => {
        dispatch(removeProject(project.id));
        setUpdateForm(() => ({ name: "" }));
    };

    const CloseIcon = () => (
        <IconButton
            Icon={FaTimes}
            onClick={() => setShowUpdateProject(false)}
            variant="danger"
            className="settings-user-update__header__icon "
        />
    );

    return (
        <div className="settings-user-update">
            <div className="settings-user-update__header">
                <div className="settings-user-update__header__text">
                    Update Project
                </div>
                <CloseIcon />
            </div>
            {project && (
                <div className="settings-user-update__inputs">
                    <Input
                        value={updateForm.name}
                        onChange={formChangeHandler}
                        placeholder="Project Name"
                        name="name"
                        className="settings-user-update__input__username"
                    />
                </div>
            )}
            <div className="flex justify-between">
                <Button
                    variant="primary"
                    onClick={updateProjectHandler}
                    className="settings-user-update__update"
                >
                    <FaPaperPlane />
                    <span>Update</span>
                </Button>
                <Button
                    onClick={removeProjectHandler}
                    variant="danger"
                    className="settings-user-update__remove"
                >
                    <FaTrash className="text-xl" />
                    <span>Delete Project</span>
                </Button>
            </div>
        </div>
    );
};

export default SettingsProjectUpdateForm;
