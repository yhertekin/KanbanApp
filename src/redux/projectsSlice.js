import { createSlice, nanoid } from "@reduxjs/toolkit";

const updateStorage = (newState) => {
    localStorage.setItem("projects", JSON.stringify(newState));
};

export const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        items: JSON.parse(localStorage.getItem("projects")) || [],
        currentProject:
            JSON.parse(localStorage.getItem("currentProject")) || {},
    },
    reducers: {
        createProject: {
            reducer: (state, action) => {
                state.items = [action.payload, ...state.items];
                updateStorage(state.items);
            },
            prepare: ({ projectName }) => {
                const project = {
                    id: nanoid(),
                    name: projectName,
                    createdAt: new Date(),
                };
                return { payload: project };
            },
        },

        updateCurrentProject: (state, action) => {
            const id = action.payload;
            const project = state.items.find((item) => item.id === id);
            state.currentProject = project;
            localStorage.setItem("currentProject", JSON.stringify(project));
        },

        updateProject: (state, action) => {
            const id = action.payload.id;
            const projectIndex = state.items.findIndex(
                (project) => project.id === id
            );
            state.items[projectIndex] = {
                ...state.items[projectIndex],
                ...action.payload,
            };

            updateStorage(state.items);
        },

        removeProject: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter((project) => project.id !== id);
            console.log("project state.items", state.items);
            updateStorage(state.items);
        },
    },
});

export const {
    createProject,
    updateCurrentProject,
    updateProject,
    removeProject,
} = projectsSlice.actions;
export default projectsSlice.reducer;
