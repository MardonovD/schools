import ActionType from "../contants/action-type";

export const ActionReducers = (state = 0, { type, payload }) => {
  switch (type) {
    case ActionType.USER_API:
      return { ...state, payload };
    case ActionType.DOKON_SOTUV:
      return { ...state, payload };
    default:
      return state;
  }
};


