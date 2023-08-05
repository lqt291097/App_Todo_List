const TODOS_STORAGE_KEY = "TODOS";
export default {
    // Lấy dữ liệu ra từ local storage và lưu dữ liệu vào local storage
    get() {
        return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || [];
    },
    set(todos) {
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
    },
};
