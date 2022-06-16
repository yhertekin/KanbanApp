import { useState } from "react";

import SettingsProjectUpdateForm from "./SettingsProjectUpdateForm";

import { FiSettings } from "react-icons/fi";

const SettingsProject = ({ project, currentProject, ...props }) => {
    const [showUpdateProject, setShowUpdateProject] = useState(false);

    return (
        <div className="relative">
            {project.id === currentProject.id && (
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
                className="border rounded-md my-2 hover:border-blue-600 p-2"
            >
                <div className="flex justify-center items-center font-bold">
                    <div>{project.projectName}</div>
                    <FiSettings
                        className="ml-auto hover:cursor-pointer"
                        onClick={() =>
                            setShowUpdateProject((prevState) => !prevState)
                        }
                    />
                </div>
                {showUpdateProject && (
                    <SettingsProjectUpdateForm
                        project={project}
                        currentProject={currentProject}
                        setShowUpdateProject={setShowUpdateProject}
                    />
                )}
            </div>
        </div>
    );
};

export default SettingsProject;
