export enum FilterActions {
  limit = "LIMIT",
  range = "RANGE"
}

export type Actions =
  | {
      type: FilterActions.limit;
      payload: {
        limit: number;
      };
    }
  | {
      type: FilterActions.range;
      payload: {
        range: number;
      };
    };

export interface FilterState {
  limit: number;
  range: number;
}

export type State = {
  filter: FilterState;
};
