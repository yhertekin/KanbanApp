import { useState } from "react";

import IconButton from "../../components/IconButton";
import SettingsProjectUpdateForm from "./SettingsProjectUpdateForm";

import { FiSettings } from "react-icons/fi";

const SettingsProject = ({ project }) => {
    const [showUpdateProject, setShowUpdateProject] = useState(false);
    const [spin, setSpin] = useState(false);

    const SettingsIcon = ({ project }) => (
        <IconButton
            className="ml-auto"
            Icon={FiSettings}
            onClick={() => {
                setShowUpdateProject((prevState) => !prevState);
                setSpin((prevState) => !prevState);
            }}
        />
    );

    return (
        <div>
            <div
                key={project.id}
                className="flex border p-2 rounded-md my-2 justify-center items-center"
            >
                <div>{project.name}</div>
                <SettingsIcon project={project} />
            </div>

            {showUpdateProject && (
                <SettingsProjectUpdateForm
                    project={project}
                    setShowUpdateProject={setShowUpdateProject}
                />
            )}
        </div>
    );
};

export default SettingsProject;
