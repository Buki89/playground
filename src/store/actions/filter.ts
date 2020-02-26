import { FilterActions } from "../../lib/types";

export const getTotalNumber = (totalNumber: number) => ({
  type: FilterActions.totalNumber,
  payload: {
    totalNumber
  }
});
