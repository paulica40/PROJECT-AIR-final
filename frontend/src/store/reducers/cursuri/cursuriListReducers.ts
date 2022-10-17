import {
  CursuriListState,
  CursuriListAction,
  CursuriListActionTypes,
} from 'types/redux/cursuri/cursuriList';

const initialData: CursuriListState = {
  rows: [],
  loading: false,
  count: 0,
  modalOpen: false,
  idToDelete: null,
};

export default (state = initialData, action: CursuriListAction): CursuriListState => {
  switch (action.type) {
    case CursuriListActionTypes.CURSURI_LIST_FILTERED:
      return {
        ...state,
        rows: action.payload!.rows,
        loading: false,
      };
    case CursuriListActionTypes.CURSURI_LIST_FETCH_STARTED:
      return {
        ...state,
        loading: true,
      };
    case CursuriListActionTypes.CURSURI_LIST_FETCH_SUCCESS:
      return {
        ...state,
        rows: action.payload!.rows,
        loading: false,
        count: action.payload!.count,
      };
    case CursuriListActionTypes.CURSURI_LIST_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        rows: [],
      };
    case CursuriListActionTypes.CURSURI_LIST_DELETE_STARTED:
      return {
        ...state,
        loading: true,
      };
    case CursuriListActionTypes.CURSURI_LIST_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    case CursuriListActionTypes.CURSURI_LIST_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    case CursuriListActionTypes.CURSURI_LIST_OPEN_CONFIRM:
      return {
        ...state,
        loading: false,
        modalOpen: true,
        idToDelete: action.payload.id,
      };
    case CursuriListActionTypes.CURSURI_LIST_CLOSE_CONFIRM:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    default:
      return state;
  }
};
