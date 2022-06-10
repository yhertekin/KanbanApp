import { useMemo } from "react";
import { useSelector } from "react-redux";

export const SelectAllProjects = () =>
    useSelector((state) => state.projects.items);

export const SelectProjectById = (projectId) => {
    const projects = SelectAllProjects();
    return useMemo(
        () => projects.find((projects) => projects.id === projectId),
        [projects, projectId]
    );
};

export const SelectProjectsByUserId = (userId) => {
    const projects = SelectAllProjects();
    return useMemo(
        () =>
            projects.filter(
                (project) =>
                    project.creater === userId ||
                    project.participants.find((id) => id === userId)
            ),
        [projects, userId]
    );
};

// export const SelectCurrentProject = () => {
//     const loggedInUser = getItemFromLocalStorage("loggedInUser");
//     const projects = SelectProjectsByUserId(loggedInUser.id);
//     return useMemo(
//         () => projects.find((project) => project.current),
//         [projects, loggedInUser]
//     );
// };
