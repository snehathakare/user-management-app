import http from "../http-common";

const getAll = () => {
    return http.get("/users");
};

const get = id => {
    return http.get(`/users/${id}`);
};

const create = data => {
    return http.post("/users", data);
};

const update = (id, data) => {
    return http.put(`/users/${id}`, data);
};

const remove = id => {
    return http.delete(`/users/${id}`);
};

const findUser = term => {
    return http.get(`/users?search=${term}`);
};

const FetchUserService = {
    getAll,
    get,
    create,
    update,
    remove,
    findUser
};

export default FetchUserService;