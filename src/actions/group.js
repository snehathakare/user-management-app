import {
    CREATE_GROUP,
    RETRIEVE_GROUPS,
    UPDATE_GROUP,
    DELETE_GROUP,
} from "./type";

import FetchGroupService from "../services/FetchGroupService";

export const createGroup = (name, description) => async (dispatch) => {
    try {
        const res = await FetchGroupService.create({ name, description });

        dispatch({
            type: CREATE_GROUP,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveGroups = () => async (dispatch) => {
    try {
        const res = await FetchGroupService.getAll();

        dispatch({
            type: RETRIEVE_GROUPS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateGroup = (id, data) => async (dispatch) => {
    try {
        const res = await FetchGroupService.update(id, data);

        dispatch({
            type: UPDATE_GROUP,
            payload: data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteGroup = (id) => async (dispatch) => {
    try {
        await FetchGroupService.remove(id);

        dispatch({
            type: DELETE_GROUP,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};
export const findGroup = (title) => async (dispatch) => {
    try {
        const res = await FetchGroupService.findUser(title);

        dispatch({
            type: RETRIEVE_GROUPS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};
