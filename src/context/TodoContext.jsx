import { createContext, useState, useEffect, useContext } from "react";
import { nanoid } from "nanoid";
import { getItemFromLocalStorage, updateLocalStorage } from "../functions";
import { SelectCurrentProject } from "../selectors";
import { useUser } from "./UserContext";
import { useMemo } from "react";

const STATUS = {
    REVIEW: "review",
    IN_PROGRESS: "in_progress",
    TEST: "test",
    COMPLETED: "completed",
};

const findIndex = (list, id) => list.findIndex((item) => item.id === id);

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(getItemFromLocalStorage("todos") || []);

    const { loggedInUser } = useUser();

    useEffect(() => {
        updateLocalStorage("todos", todos);
    }, [todos]);

    const createTodo = (todoForm) => {
        const todo = {
            id: nanoid(),
            status: STATUS.REVIEW,
            createdAt: new Date(),
            comments: [],
            ...todoForm,
        };
        setTodos((prevState) => [todo, ...prevState]);
    };

    const removeTodo = (todoId) => {
        const newTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(newTodos);
    };

    const getCurrentProjectTodos = () => {
        const currentProject = loggedInUser.currentProject;
        return todos.filter((todo) => todo.project === currentProject.id);
    };

    const setStatusReview = (todoId) => {
        const index = findIndex(todos, todoId);
        todos[index].status = STATUS.REVIEW;
        setTodos([...todos]);
    };

    const setStatusInProgress = (todoId) => {
        const index = findIndex(todos, todoId);
        if (
            STATUS.REVIEW !== todos[index].status &&
            STATUS.TEST !== todos[index].status
        )
            return;

        todos[index].status = STATUS.IN_PROGRESS;
        setTodos([...todos]);
    };

    const setStatusTest = (todoId) => {
        const index = findIndex(todos, todoId);
        if (todos[index].status !== STATUS.IN_PROGRESS) return;
        todos[index].status = STATUS.TEST;
        setTodos([...todos]);
    };

    const setStatusCompleted = (todoId) => {
        const index = findIndex(todos, todoId);
        if (todos[index].status !== STATUS.TEST) return;
        todos[index].status = STATUS.COMPLETED;
        setTodos([...todos]);
    };

    const appendComment = (todoId, commentForm) => {
        const index = findIndex(todos, todoId);
        todos[index].comments.push(commentForm);
        setTodos([...todos]);
    };

    const getComments = (todoId) =>
        todos.find((todo) => todo.id === todoId).comments;

    const value = {
        todos,
        setTodos,
        createTodo,
        removeTodo,
        getCurrentProjectTodos,
        setStatusReview,
        setStatusInProgress,
        setStatusTest,
        setStatusCompleted,
        appendComment,
        getComments,
    };

    return (
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    );
};

export const useTodo = () => useContext(TodoContext);
