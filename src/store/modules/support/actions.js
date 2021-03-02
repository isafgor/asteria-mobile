import { AxiosWrapper } from '../../../assets/api/AxiosWrapper';

export default {
    sendFeedback (context, payload) {
        return AxiosWrapper.post('/api/feedback', payload)
    }
};
