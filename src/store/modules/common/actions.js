import { ADD_ALERT, REMOVE_ALERT } from '../../mutation-types';

export default {
  setAlert(context, payload) {
    context.commit(ADD_ALERT, payload);
  },
  removeAlertCounter({ commit }, { id, timeout }) {
    setTimeout(function () {
      commit(REMOVE_ALERT, id);
    }, timeout);
  },
};
