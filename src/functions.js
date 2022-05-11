export const formatDate = (date) => {
    if (typeof date === "string") date = new Date(date);
    return date
        ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        : null;
};

export const removeCheckedFromColors = () => {
    const colors = Array.from(document.querySelectorAll(".colorpicker__item"));
    colors.forEach((color) => color.classList.remove("checked"));
};
