export interface ParticipantiListState {
  rows: {
    [key: string]: any;
  }[];
  loading: boolean;
  count: number;
  modalOpen: boolean;
  idToDelete: null | string;
}

export enum ParticipantiListActionTypes {
  PARTICIPANTI_LIST_FILTERED = 'PARTICIPANTI_LIST_FILTERED',
  PARTICIPANTI_LIST_FETCH_STARTED = 'PARTICIPANTI_LIST_FETCH_STARTED',
  PARTICIPANTI_LIST_FETCH_SUCCESS = 'PARTICIPANTI_LIST_FETCH_SUCCESS',
  PARTICIPANTI_LIST_FETCH_ERROR = 'PARTICIPANTI_LIST_FETCH_ERROR',
  PARTICIPANTI_LIST_DELETE_STARTED = 'PARTICIPANTI_LIST_DELETE_STARTED',
  PARTICIPANTI_LIST_DELETE_SUCCESS = 'PARTICIPANTI_LIST_DELETE_SUCCESS',
  PARTICIPANTI_LIST_DELETE_ERROR = 'PARTICIPANTI_LIST_DELETE_ERROR',
  PARTICIPANTI_LIST_OPEN_CONFIRM = 'PARTICIPANTI_LIST_OPEN_CONFIRM',
  PARTICIPANTI_LIST_CLOSE_CONFIRM = 'PARTICIPANTI_LIST_CLOSE_CONFIRM',
}

interface ParticipantiListFiltered {
  type: ParticipantiListActionTypes.PARTICIPANTI_LIST_FILTERED;
  payload?: {
    rows: {
      [key: string]: any;
    }[];
    count: number;
  };
}

interface ParticipantiListFetchStarted {
  type: ParticipantiListActionTypes.PARTICIPANTI_LIST_FETCH_STARTED;
}

interface ParticipantiListFetchSuccess {
  type: ParticipantiListActionTypes.PARTICIPANTI_LIST_FETCH_SUCCESS;
  payload?: {
    rows: {
      [key: string]: any;
    }[];
    count: number;
  };
}

interface ParticipantiListFetchError {
  type: ParticipantiListActionTypes.PARTICIPANTI_LIST_FETCH_ERROR;
}

interface ParticipantiListDeleteStarted {
  type: ParticipantiListActionTypes.PARTICIPANTI_LIST_DELETE_STARTED;
}

interface ParticipantiListDeleteSuccess {
  type: ParticipantiListActionTypes.PARTICIPANTI_LIST_DELETE_SUCCESS;
}

interface ParticipantiListDeleteError {
  type: ParticipantiListActionTypes.PARTICIPANTI_LIST_DELETE_ERROR;
}

interface ParticipantiListOpenConfirm {
  type: ParticipantiListActionTypes.PARTICIPANTI_LIST_OPEN_CONFIRM;
  payload: {
    id: string;
  };
}

interface ParticipantiListCloseConfirm {
  type: ParticipantiListActionTypes.PARTICIPANTI_LIST_CLOSE_CONFIRM;
}

export type ParticipantiListAction =
  | ParticipantiListFiltered
  | ParticipantiListFetchStarted
  | ParticipantiListFetchSuccess
  | ParticipantiListFetchError
  | ParticipantiListDeleteStarted
  | ParticipantiListDeleteSuccess
  | ParticipantiListDeleteError
  | ParticipantiListOpenConfirm
  | ParticipantiListCloseConfirm;
