import { useState } from "react";
//custom
import Input from "../../components/Input";
import Button from "../../components/Button";
import Alert from "../../components/Alert";
import { createProject } from "../../redux/projectsSlice";
//third
import { useDispatch } from "react-redux";
//css
import "./ProjectCreateForm.css";

const formInitial = { projectName: "" };

const ProjectCreateForm = () => {
    const [form, setForm] = useState(formInitial);
    const [warningMessage, setWarningMessage] = useState("");
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const createProjectHandler = () => {
        if (form.projectName === "") {
            setWarningMessage("Please provide a project name!");
            return;
        }
        setWarningMessage("");
        dispatch(createProject(form));
        setForm(formInitial);
    };

    return (
        <div className="mt-5">
            <h2 className="font-bold">Create Project</h2>
            {warningMessage && (
                <Alert
                    message={warningMessage}
                    className="mt-2"
                    variant="danger"
                />
            )}
            <Input
                name="projectName"
                value={form.projectName}
                onChange={onChangeHandler}
                placeholder="Project Name"
                className="my-2"
            />

            <Button
                className="px-2"
                variant="primary"
                onClick={createProjectHandler}
            >
                Create Project
            </Button>
        </div>
    );
};

export default ProjectCreateForm;
