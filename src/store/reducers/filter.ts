import { FilterActions, Actions } from "../../lib/types";

interface FilterState {
  totalNumber: number;
}

const initialState: FilterState = {
  totalNumber: 0
};

export default (state = initialState, action: Actions) => {
  switch (action.type) {
    case FilterActions.totalNumber:
      return { totalNumber: action.payload.totalNumber };

    default:
      return state;
  }
};
