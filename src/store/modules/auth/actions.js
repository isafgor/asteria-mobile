import {AxiosWrapper} from "../../../assets/api/AxiosWrapper";
import Vue from 'vue'
import {SET_TOKEN} from "../../mutation-types";
import axios from "axios";

export default {
    login (context, payload) {
        return AxiosWrapper.post('/api/login', payload).then(
            response => {
                context.commit(SET_TOKEN, response.data.token)
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
                Vue.$cookies.set(
                    "token",
                    response.data.token,
                    '0'
                );
            }
        )
    },
    logOut(context) {
        context.commit(SET_TOKEN, null);
        localStorage.removeItem("vuex");
        window.$cookies.remove("token");
    },
    setToken(context, payload) {
        context.commit(SET_TOKEN, payload)
    }
};
