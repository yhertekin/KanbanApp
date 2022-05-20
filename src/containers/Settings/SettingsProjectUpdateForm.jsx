import { useEffect, useState } from "react";
//custom
import Button from "../../components/Button";
import Input from "../../components/Input";
import IconButton from "../../components/IconButton";
import {
    updateProject,
    removeProject,
    updateCurrentProject,
} from "../../redux/projectsSlice";
import { GetCurrentProject } from "../../selectors";
//third
import { useDispatch } from "react-redux";
import {
    FaTimes,
    FaTrash,
    FaPaperPlane,
    FaToggleOn,
    FaToggleOff,
} from "react-icons/fa";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
//css
import "./SettingsUserUpdateForm.css";
import Alert from "../../components/Alert";

const SettingsProjectUpdateForm = ({ project, setShowUpdateProject }) => {
    const dispatch = useDispatch();
    const [updateForm, setUpdateForm] = useState({
        name: project.name,
    });
    const [warningMessage, setWarningMessage] = useState(false);
    const currentProject = GetCurrentProject();

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
        if (currentProject.id === project.id) {
            setWarningMessage(
                "You can not remove the current project!\nPlease change the current project before you remove it."
            );
            return;
        }
        dispatch(removeProject(project.id));
        setUpdateForm(() => ({ name: "" }));
    };

    const CloseIcon = () => (
        <IconButton
            Icon={FaTimes}
            onClick={() => setShowUpdateProject(false)}
            variant="danger"
            className="text-xl"
        />
    );

    const ToggleCurrentProject = () => (
        <IconButton
            Icon={currentProject.id === project.id ? BsToggleOn : BsToggleOff}
            className="text-xl"
            onClick={() => dispatch(updateCurrentProject(project.id))}
        />
    );
    return (
        <div className="mt-2 pt-2 border-t">
            <div className="text-2xl mb-1">Update Project</div>
            {/* <CloseIcon /> */}
            {project && (
                <div className="">
                    {warningMessage && (
                        <Alert
                            message={warningMessage}
                            variant="danger"
                            className="whitespace-pre-wrap mt-2"
                        />
                    )}
                    <Input
                        value={updateForm.name}
                        onChange={formChangeHandler}
                        placeholder="Project Name"
                        name="name"
                        className="mt-2"
                    />
                    <div className="flex justify-between items-center border-b pb-1 my-2">
                        <span>Current Project</span>
                        <ToggleCurrentProject />
                    </div>
                </div>
            )}
            <div className="flex justify-between">
                <Button
                    onClick={removeProjectHandler}
                    variant="danger"
                    className="flex justify-center items-center h-9 py-1 px-2"
                >
                    <FaTrash className="mr-1" />
                    <span>Delete Project</span>
                </Button>
                <Button
                    variant="primary"
                    onClick={updateProjectHandler}
                    className="flex justify-center items-center h-9 py-1 px-2"
                >
                    <FaPaperPlane className="mr-1" />
                    <span>Update</span>
                </Button>
            </div>
        </div>
    );
};

export default SettingsProjectUpdateForm;
