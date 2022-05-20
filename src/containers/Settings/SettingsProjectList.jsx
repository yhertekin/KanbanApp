import { useEffect, useState } from "react";
//custom
import Input from "../../components/Input";
import SettingsProjectUpdateForm from "./SettingsProjectUpdateForm";
import IconButton from "../../components/IconButton";
import { GetAllProjects } from "../../selectors";
import SettingsProject from "./SettingsProject";
//third
import { FiSettings } from "react-icons/fi";

//css
import "./SettingsUserList.css";

const SettingsProjectList = ({ className }) => {
    const [search, setSearch] = useState("");

    const projects = GetAllProjects();
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [currentProject, setCurrentProject] = useState(null);

    const searchHandler = (e) => {
        setFilteredProjects(() =>
            projects.filter((project) =>
                project.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            )
        );
        setSearch(e.target.value);
    };

    useEffect(() => setFilteredProjects(() => projects), [projects]);

    return (
        <div className={className ?? ""}>
            <h2 className="text-2xl my-2">Projects</h2>
            <div className="">
                <Input
                    value={search}
                    onChange={searchHandler}
                    placeholder="Search"
                    className="my-2 outline-blue-600"
                />
                <div className=" ">
                    <div>
                        {filteredProjects?.map((project) => (
                            <SettingsProject
                                project={project}
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
