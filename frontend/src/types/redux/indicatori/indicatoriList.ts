export interface IndicatoriListState {
  rows: {
    [key: string]: any;
  }[];
  loading: boolean;
  count: number;
  modalOpen: boolean;
  idToDelete: null | string;
}

export enum IndicatoriListActionTypes {
  INDICATORI_LIST_FILTERED = 'INDICATORI_LIST_FILTERED',
  INDICATORI_LIST_FETCH_STARTED = 'INDICATORI_LIST_FETCH_STARTED',
  INDICATORI_LIST_FETCH_SUCCESS = 'INDICATORI_LIST_FETCH_SUCCESS',
  INDICATORI_LIST_FETCH_ERROR = 'INDICATORI_LIST_FETCH_ERROR',
  INDICATORI_LIST_DELETE_STARTED = 'INDICATORI_LIST_DELETE_STARTED',
  INDICATORI_LIST_DELETE_SUCCESS = 'INDICATORI_LIST_DELETE_SUCCESS',
  INDICATORI_LIST_DELETE_ERROR = 'INDICATORI_LIST_DELETE_ERROR',
  INDICATORI_LIST_OPEN_CONFIRM = 'INDICATORI_LIST_OPEN_CONFIRM',
  INDICATORI_LIST_CLOSE_CONFIRM = 'INDICATORI_LIST_CLOSE_CONFIRM',
}

interface IndicatoriListFiltered {
  type: IndicatoriListActionTypes.INDICATORI_LIST_FILTERED;
  payload?: {
    rows: {
      [key: string]: any;
    }[];
    count: number;
  };
}

interface IndicatoriListFetchStarted {
  type: IndicatoriListActionTypes.INDICATORI_LIST_FETCH_STARTED;
}

interface IndicatoriListFetchSuccess {
  type: IndicatoriListActionTypes.INDICATORI_LIST_FETCH_SUCCESS;
  payload?: {
    rows: {
      [key: string]: any;
    }[];
    count: number;
  };
}

interface IndicatoriListFetchError {
  type: IndicatoriListActionTypes.INDICATORI_LIST_FETCH_ERROR;
}

interface IndicatoriListDeleteStarted {
  type: IndicatoriListActionTypes.INDICATORI_LIST_DELETE_STARTED;
}

interface IndicatoriListDeleteSuccess {
  type: IndicatoriListActionTypes.INDICATORI_LIST_DELETE_SUCCESS;
}

interface IndicatoriListDeleteError {
  type: IndicatoriListActionTypes.INDICATORI_LIST_DELETE_ERROR;
}

interface IndicatoriListOpenConfirm {
  type: IndicatoriListActionTypes.INDICATORI_LIST_OPEN_CONFIRM;
  payload: {
    id: string;
  };
}

interface IndicatoriListCloseConfirm {
  type: IndicatoriListActionTypes.INDICATORI_LIST_CLOSE_CONFIRM;
}

export type IndicatoriListAction =
  | IndicatoriListFiltered
  | IndicatoriListFetchStarted
  | IndicatoriListFetchSuccess
  | IndicatoriListFetchError
  | IndicatoriListDeleteStarted
  | IndicatoriListDeleteSuccess
  | IndicatoriListDeleteError
  | IndicatoriListOpenConfirm
  | IndicatoriListCloseConfirm;
