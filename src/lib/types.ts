export enum FilterActions {
  totalNumber = "GET_TOTAL_NUMBER"
}

export type Actions = {
  type: FilterActions.totalNumber;
  payload: {
    totalNumber: number;
  };
};
