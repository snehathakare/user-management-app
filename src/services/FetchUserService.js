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

const findUserByGroup = groupId => {
    return http.get(`/users?groupId=${groupId}`);
};

const FetchUserService = {
    getAll,
    get,
    create,
    update,
    remove,
    findUserByGroup
};

export default FetchUserService;