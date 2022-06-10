import { useMemo, useState } from "react";
//custom
import Button from "../../components/Button";
import Input from "../../components/Input";
import IconButton from "../../components/IconButton";
import Alert from "../../components/Alert";
import { useUser } from "../../context/UserContext";
import { updateProject, removeProject } from "../../redux/projectsSlice";
//third
import { FaTimes, FaTrash, FaPaperPlane } from "react-icons/fa";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { useDispatch } from "react-redux";

//css
import "./SettingsUserUpdateForm.css";

const SettingsProjectUpdateForm = ({
    project,
    currentProject,
    setShowUpdateProject,
}) => {
    const [updateForm, setUpdateForm] = useState({
        projectName: project.projectName,
    });
    const [warningMessage, setWarningMessage] = useState(false);

    const { updateCurrentProject } = useUser();
    const dispatch = useDispatch();

    const formChangeHandler = (e) => {
        setUpdateForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const updateProjectHandler = () => {
        if (updateForm.projectName === "") {
            setWarningMessage("Please provide the project name!");
            return;
        }
        setWarningMessage("");
        dispatch(updateProject({ projectId: project.id, updateForm }));
        setUpdateForm(() => ({ projectName: "" }));
    };

    const removeProjectHandler = () => {
        if (currentProject.id === project.id) {
            setWarningMessage(
                "You can not remove the current project!\nPlease change the current project before you remove it."
            );
            return;
        }
        setWarningMessage("");
        dispatch(removeProject(project.id));
        setUpdateForm(() => ({ projectName: "" }));
    };

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
                        value={updateForm.projectName}
                        onChange={formChangeHandler}
                        placeholder="Project Name"
                        name="projectName"
                        className="mt-2"
                    />
                    <div className="flex justify-between items-center border-b pb-1 my-2">
                        <span>Current Project</span>

                        <div
                            className="text-xl hover:cursor-pointer"
                            onClick={() => updateCurrentProject(project.id)}
                        >
                            {currentProject?.id === project.id ? (
                                <BsToggleOn />
                            ) : (
                                <BsToggleOff />
                            )}
                        </div>
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
