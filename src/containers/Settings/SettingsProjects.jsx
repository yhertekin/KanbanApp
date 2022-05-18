//custom
import ProjectCreateForm from "../Projects/ProjectCreateForm";
import ProjectPicker from "../Projects/ProjectPicker";
import SettingsProjectList from "./SettingsProjectList";
import { GetCurrentProject } from "../../selectors";
//third
//css

const SettingsProjects = () => {
    const currentProject = GetCurrentProject();
    return (
        <div className="flex w-full">
            <div className="w-6/12 p-2">
                <div className="">
                    <h1 className="font-bold text-3xl my-2 ">
                        Current Project:{" "}
                        <span className="text-blue-600">
                            {currentProject.name}
                        </span>
                    </h1>
                    <h2 className="mt-5 mb-2 font-bold">Change the project</h2>
                    <ProjectPicker />
                </div>
                <ProjectCreateForm />
            </div>
            <div className="w-6/12 p-2 mt-16">
                <h2 className="font-bold">Projects</h2>
                <SettingsProjectList />
            </div>
        </div>
    );
};

export default SettingsProjects;
