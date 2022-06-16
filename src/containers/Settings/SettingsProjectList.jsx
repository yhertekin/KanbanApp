import { useState, useEffect } from "react";
//custom
import Input from "../../components/Input";
import SettingsProject from "./SettingsProject";
import { useUser } from "../../context/UserContext";
import { SelectProjectsByUserId } from "../../selectors";
//third

//css
import "./SettingsUserList.css";

const SettingsProjectList = ({ currentProject, className, ...props }) => {
    const [search, setSearch] = useState("");
    const { loggedInUser } = useUser();
    const projects = SelectProjectsByUserId(loggedInUser.id);
    const [filteredProjects, setFilteredProjects] = useState(projects);

    const searchHandler = (e) => {
        setFilteredProjects(() =>
            projects.filter((project) =>
                project.projectName
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            )
        );

        setSearch(e.target.value);
    };

    useEffect(() => {
        setFilteredProjects(projects);
    }, [projects]);

    return (
        <div className={className ?? ""}>
            <h2 className="text-xl">Project List</h2>
            <div className="">
                <Input
                    value={search}
                    onChange={searchHandler}
                    placeholder="Search"
                    className="mt-2 outline-blue-600"
                />
                <div className=" ">
                    <div>
                        {filteredProjects?.map((project) => (
                            <SettingsProject
                                project={project}
                                currentProject={currentProject}
                                key={project.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsProjectList;
