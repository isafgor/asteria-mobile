import { AxiosWrapper } from '../../../assets/api/AxiosWrapper';
import {SET_FORECAST} from "../../mutation-types";

export default {
    getForecasts (context, payload) {
        return AxiosWrapper.get('/api/forecasts', payload).then((response) => {
            context.commit(SET_FORECAST, response.data)
            context.commit('SET_LOADER', false)
        });
    }
};
