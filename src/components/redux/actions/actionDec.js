import ActionType from "../contants/action-type";
export const UserAction = (user) => {
  return {
    type: ActionType.USER_API,
    payload: user,
  };
};
export const DokonAction = (dokon) => {
  return {
    type: ActionType.DOKON_SOTUV,
    payload: dokon,
  };
};
