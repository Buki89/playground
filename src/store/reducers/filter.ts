import { FilterActions, Actions, FilterState } from "../../lib/types";

const initialState: FilterState = {
  limit: 50,
  range: 5000
};

export default (state = initialState, action: Actions) => {
  switch (action.type) {
    case FilterActions.limit:
      return { ...state, limit: action.payload.limit };
    case FilterActions.range:
      return { ...state, range: action.payload.range };
    default:
      return state;
  }
};
