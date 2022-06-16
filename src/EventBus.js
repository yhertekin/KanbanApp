const eventBus = {
    on(event, callback) {
        if (!this.events[event]) this.events[event] = callback;
    },
    dispatch(event, data) {
        if (this.events[event]) this.events[event](data);
    },
    remove(event) {
        if (this.events[event]) delete this.events[event];
    },

    events: {},
};

export const actionNames = {
    addTodo: "addToo",
};
export default eventBus;

//  isimleri aynı gelmesin
// kontrol edilsin
// action names export import
