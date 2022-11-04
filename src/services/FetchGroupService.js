import http from "../http-common";

const getAll = () => {
    return http.get("/groups");
};

const get = id => {
    return http.get(`/groups/${id}`);
};

const create = data => {
    return http.post("/groups", data);
};

const update = (id, data) => {
    return http.put(`/groups/${id}`, data);
};

const remove = id => {
    return http.delete(`/groups/${id}`);
};

const FetchGroupService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default FetchGroupService;