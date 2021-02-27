import { ADD_ALERT, REMOVE_ALERT, } from '../../mutation-types';

export default {
  [ADD_ALERT]: function (state, { timeout, ...alert }) {
    alert.timeout = timeout || 2500;
    alert.id = new Date().getTime();
    state.alerts.unshift(alert);
    this.dispatch('common/removeAlertCounter', alert);
  },

  [REMOVE_ALERT]: (state, id) => {
    for (let i = 0; i < state.alerts.length; i++) {
      if (state.alerts[i].id === id) {
        state.alerts.splice(i, 1);
        break;
      }
    }
  },
};
