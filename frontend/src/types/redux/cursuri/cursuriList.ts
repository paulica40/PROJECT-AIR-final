export interface CursuriListState {
  rows: {
    [key: string]: any;
  }[];
  loading: boolean;
  count: number;
  modalOpen: boolean;
  idToDelete: null | string;
}

export enum CursuriListActionTypes {
  CURSURI_LIST_FILTERED = 'CURSURI_LIST_FILTERED',
  CURSURI_LIST_FETCH_STARTED = 'CURSURI_LIST_FETCH_STARTED',
  CURSURI_LIST_FETCH_SUCCESS = 'CURSURI_LIST_FETCH_SUCCESS',
  CURSURI_LIST_FETCH_ERROR = 'CURSURI_LIST_FETCH_ERROR',
  CURSURI_LIST_DELETE_STARTED = 'CURSURI_LIST_DELETE_STARTED',
  CURSURI_LIST_DELETE_SUCCESS = 'CURSURI_LIST_DELETE_SUCCESS',
  CURSURI_LIST_DELETE_ERROR = 'CURSURI_LIST_DELETE_ERROR',
  CURSURI_LIST_OPEN_CONFIRM = 'CURSURI_LIST_OPEN_CONFIRM',
  CURSURI_LIST_CLOSE_CONFIRM = 'CURSURI_LIST_CLOSE_CONFIRM',
}

interface CursuriListFiltered {
  type: CursuriListActionTypes.CURSURI_LIST_FILTERED;
  payload?: {
    rows: {
      [key: string]: any;
    }[];
    count: number;
  };
}

interface CursuriListFetchStarted {
  type: CursuriListActionTypes.CURSURI_LIST_FETCH_STARTED;
}

interface CursuriListFetchSuccess {
  type: CursuriListActionTypes.CURSURI_LIST_FETCH_SUCCESS;
  payload?: {
    rows: {
      [key: string]: any;
    }[];
    count: number;
  };
}

interface CursuriListFetchError {
  type: CursuriListActionTypes.CURSURI_LIST_FETCH_ERROR;
}

interface CursuriListDeleteStarted {
  type: CursuriListActionTypes.CURSURI_LIST_DELETE_STARTED;
}

interface CursuriListDeleteSuccess {
  type: CursuriListActionTypes.CURSURI_LIST_DELETE_SUCCESS;
}

interface CursuriListDeleteError {
  type: CursuriListActionTypes.CURSURI_LIST_DELETE_ERROR;
}

interface CursuriListOpenConfirm {
  type: CursuriListActionTypes.CURSURI_LIST_OPEN_CONFIRM;
  payload: {
    id: string;
  };
}

interface CursuriListCloseConfirm {
  type: CursuriListActionTypes.CURSURI_LIST_CLOSE_CONFIRM;
}

export type CursuriListAction =
  | CursuriListFiltered
  | CursuriListFetchStarted
  | CursuriListFetchSuccess
  | CursuriListFetchError
  | CursuriListDeleteStarted
  | CursuriListDeleteSuccess
  | CursuriListDeleteError
  | CursuriListOpenConfirm
  | CursuriListCloseConfirm;
