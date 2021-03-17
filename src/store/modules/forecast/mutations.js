import {SET_FORECAST} from "../../mutation-types";

export default {
    [SET_FORECAST]: (state, payload) => {
        state.forecast = payload;
    },
    ['SET_LOADER']: (state, payload) => {
        state.loader = payload;
    }
}
