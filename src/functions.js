export const formatDate = (date) => {
    if (typeof date === "string") date = new Date(date);
    return date
        ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        : null;
};

export const updateLocalStorage = (storageName, state) => {
    localStorage.setItem(storageName, JSON.stringify(state));
};

export const getItemFromLocalStorage = (storageName) => {
    return JSON.parse(localStorage.getItem(storageName));
};
