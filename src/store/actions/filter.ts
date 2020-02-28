import { FilterActions, Actions } from "../../lib/types";

export const setLimit = (limit: number): Actions => ({
  type: FilterActions.limit,
  payload: {
    limit
  }
});

export const setRange = (range: number): Actions => ({
  type: FilterActions.range,
  payload: {
    range
  }
});
