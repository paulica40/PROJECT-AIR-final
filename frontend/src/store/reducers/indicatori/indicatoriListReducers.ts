import {
  IndicatoriListState,
  IndicatoriListAction,
  IndicatoriListActionTypes,
} from 'types/redux/indicatori/indicatoriList';

const initialData: IndicatoriListState = {
  rows: [],
  loading: false,
  count: 0,
  modalOpen: false,
  idToDelete: null,
};

export default (state = initialData, action: IndicatoriListAction): IndicatoriListState => {
  switch (action.type) {
    case IndicatoriListActionTypes.INDICATORI_LIST_FILTERED:
      return {
        ...state,
        rows: action.payload!.rows,
        loading: false,
      };
    case IndicatoriListActionTypes.INDICATORI_LIST_FETCH_STARTED:
      return {
        ...state,
        loading: true,
      };
    case IndicatoriListActionTypes.INDICATORI_LIST_FETCH_SUCCESS:
      return {
        ...state,
        rows: action.payload!.rows,
        loading: false,
        count: action.payload!.count,
      };
    case IndicatoriListActionTypes.INDICATORI_LIST_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        rows: [],
      };
    case IndicatoriListActionTypes.INDICATORI_LIST_DELETE_STARTED:
      return {
        ...state,
        loading: true,
      };
    case IndicatoriListActionTypes.INDICATORI_LIST_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    case IndicatoriListActionTypes.INDICATORI_LIST_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    case IndicatoriListActionTypes.INDICATORI_LIST_OPEN_CONFIRM:
      return {
        ...state,
        loading: false,
        modalOpen: true,
        idToDelete: action.payload.id,
      };
    case IndicatoriListActionTypes.INDICATORI_LIST_CLOSE_CONFIRM:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    default:
      return state;
  }
};
