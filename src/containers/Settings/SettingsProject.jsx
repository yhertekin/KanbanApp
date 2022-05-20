import { useState } from "react";

import IconButton from "../../components/IconButton";
import SettingsProjectUpdateForm from "./SettingsProjectUpdateForm";
import { GetCurrentProject } from "../../selectors";

import { FiSettings } from "react-icons/fi";

const SettingsProject = ({ project }) => {
    const [showUpdateProject, setShowUpdateProject] = useState(false);
    const currentProject = GetCurrentProject();

    const SettingsIcon = ({ project }) => (
        <IconButton
            className="ml-auto"
            Icon={FiSettings}
            onClick={() => setShowUpdateProject((prevState) => !prevState)}
        />
    );

    return (
        <div className="relative">
            {currentProject.id === project.id && (
                <div className="group absolute w-3 h-3 bg-blue-600 rounded-full -top-1 -left-1">
                    <div className="group-hover:flex w-32 absolute bg-blue-600 rounded-md hidden p-2 -left-2 -top-12 ">
                        <div className="flex flex-nowrap text-white">
                            Current Project
                        </div>
                        <div className="absolute w-3 h-3 top-8  bg-blue-600 rotate-45"></div>
                    </div>
                </div>
            )}

            <div
                key={project.id}
                className="border p-2 rounded-md my-2 hover:border-blue-600"
            >
                <div className="flex justify-center items-center font-bold">
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
        </div>
    );
};

export default SettingsProject;
