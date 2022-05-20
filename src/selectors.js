import { useMemo } from "react";
import { useSelector } from "react-redux";

// user selectors start
export const GetAllUsers = () => useSelector((state) => state.users.items);
export const FindUserById = (userId) => {
    const users = GetAllUsers();
    return useMemo(
        () => users.find((user) => user.id === userId),
        [users, userId]
    );
};
export const GetLoggedInUser = () =>
    useSelector((state) => state.users.loggedInUser);
//user selectors end

//comment selectors start
export const GetAllComments = () =>
    useSelector((state) => state.comments.items);
export const GetCommentById = (id) => {
    const comments = GetAllComments();
    return comments.find((comment) => comment.id === id);
};
//comment selectors end

//todo selectors start
export const GetAllTodos = () => useSelector((state) => state.todos.items);
// ferhat abiye sor
// export const GetTodoById = (todoId) => {
//     const todoList = GetAllTodos();
//     return todoList.find((todo) => todo.id === todoId);
// };
export const GetCurrentProjectTodos = () => {
    const todoList = GetAllTodos();
    const currentProject = GetCurrentProject();
    return todoList.filter((todo) => todo.projectId === currentProject.id);
};
// todo selectors end

//label selectors start
export const GetAllLabels = () => useSelector((state) => state.labels.items);
export const GetLabelById = (labelId) => {
    const labelList = GetAllLabels();
    return labelList.find((label) => label.id === labelId);
};
export const GetCurrentProjectLabels = () => {
    const currentProject = GetCurrentProject();
    const labellist = GetAllLabels();
    return labellist.filter((label) => label.projectId === currentProject.id);
};
//label selectors end

//project selectors start
export const GetAllProjects = () =>
    useSelector((state) => state.projects.items);
export const GetCurrentProject = () =>
    useSelector((state) => state.projects.currentProject);
//project selectors end
