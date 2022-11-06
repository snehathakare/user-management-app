import {
    CREATE_USER,
    RETRIEVE_USERS,
    UPDATE_USER,
    DELETE_USER,
} from "./type";

import FetchUserService from "../services/FetchUserService";

export const createUser = (name, citizenship, residence) => async (dispatch) => {
    try {
        const res = await FetchUserService.create({ name, citizenship, residence });

        dispatch({
            type: CREATE_USER,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveUsers = () => async (dispatch) => {
    try {
        const res = await FetchUserService.getAll();

        dispatch({
            type: RETRIEVE_USERS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateUser = (id, data) => async (dispatch) => {
    try {
        const res = await FetchUserService.update(id, data);

        dispatch({
            type: UPDATE_USER,
            payload: data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteUser = (id) => async (dispatch) => {
    try {
        await FetchUserService.remove(id);

        dispatch({
            type: DELETE_USER,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

export const findUser = (title) => async (dispatch) => {
    try {
        const res = await FetchUserService.findUser(title);

        dispatch({
            type: RETRIEVE_USERS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};