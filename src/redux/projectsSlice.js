import { createSlice, nanoid } from "@reduxjs/toolkit";
import { updateLocalStorage, getItemFromLocalStorage } from "../functions";
export const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        items: getItemFromLocalStorage("projects") || [],
    },
    reducers: {
        createProject: (state, action) => {
            const project = {
                id: action.payload.id ?? nanoid(),
                projectName: action.payload.projectName,
                creater: action.payload.creater,
                participants: [],
                labels: [],
            };
            //************** non-serializable hatası verdi
            // action.payload.callback && action.payload.callback(project.id);
            //*************
            state.items = [project, ...state.items];
            updateLocalStorage("projects", state.items);
        },

        removeProject: (state, action) => {
            const projectId = action.payload;
            state.items = state.items.filter((item) => item.id !== projectId);
            updateLocalStorage("projects", state.items);
        },

        updateProject: (state, action) => {
            const index = state.items.findIndex(
                (item) => item.id === action.payload.projectId
            );
            state.items[index] = {
                ...state.items[index],
                ...action.payload.updateForm,
            };
            updateLocalStorage("projects", state.items);
        },

        // updateCurrentProject: (state, action) => {
        //     const { id, creater } = action.payload;
        //     state.items = state.items.map((project) => {
        //         if (project.creater === creater) {
        //             project.current = project.id === id;
        //         }
        //         return project;
        //     });
        //     updateLocalStorage("projects", state.items);
        // },

        appendParticipantToProject: (state, action) => {
            const { projectId, participantId } = action.payload;
            const index = state.items.findIndex(
                (item) => item.id === projectId
            );
            state.items[index].participants = [
                ...state.items[index].participants,
                participantId,
            ];
            updateLocalStorage("projects", state.items);
        },

        appendLabelToProject: (state, action) => {
            const { projectId } = action.payload;
            const index = state.items.findIndex(
                (item) => item.id === projectId
            );
            state.items[index].labels = [
                ...state.items[index].labels,
                action.payload.label,
            ];
            updateLocalStorage("projects", state.items);
        },
    },
});

export const {
    createProject,
    removeProject,
    updateCurrentProject,
    updateProject,
    appendParticipantToProject,
    appendLabelToProject,
} = projectsSlice.actions;
export default projectsSlice.reducer;
