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
import { isAdmin } from "../../functions";
import Modal from "../../components/Modal";
import DialogBox from "../../components/Modal/DialogBox";

const SettingsProjectUpdateForm = ({
    project,
    currentProject,
    setShowUpdateProject,
}) => {
    const [updateForm, setUpdateForm] = useState({
        projectName: project.projectName,
    });
    const [warningMessage, setWarningMessage] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const { updateCurrentProject, loggedInUser } = useUser();
    const admin = isAdmin(loggedInUser, project);
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

    const deleteButtonHandler = () => {
        if (currentProject.id === project.id) {
            setWarningMessage(
                "You can not remove the current project!\nPlease change the current project before you remove it."
            );
            return;
        }
        setWarningMessage("");
        setShowModal(true);
    };

    const removeProjectHandler = () => {
        dispatch(removeProject(project.id));
        setUpdateForm(() => ({ projectName: "" }));
        setShowModal(false);
    };

    return (
        <div className="mt-2 border-t">
            <div className="text-2xl my-2">Update Project</div>
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
                    {admin && (
                        <Input
                            value={updateForm.projectName}
                            onChange={formChangeHandler}
                            placeholder="Project Name"
                            name="projectName"
                            className="mt-2"
                        />
                    )}
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
            {admin && (
                <div className="flex justify-between">
                    <Button
                        onClick={deleteButtonHandler}
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
            )}
            {showModal && (
                <Modal showModal={setShowModal}>
                    <DialogBox
                        text={`Do you want to remove ${project.projectName}?`}
                        setCancelButton={() => setShowModal(false)}
                        setConfirmButton={removeProjectHandler}
                    />
                </Modal>
            )}
        </div>
    );
};

export default SettingsProjectUpdateForm;
