import {
    SET_TOKEN, SET_USER
} from "../../mutation-types";

export default {

    [SET_TOKEN]: (state, payload) => {
        state.token = payload
    },
    [SET_USER]: (state, payload) => {
        state.user = payload
    },
};
