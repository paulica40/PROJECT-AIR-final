import {
  ParticipantiListState,
  ParticipantiListAction,
  ParticipantiListActionTypes,
} from 'types/redux/participanti/participantiList';

const initialData: ParticipantiListState = {
  rows: [],
  loading: false,
  count: 0,
  modalOpen: false,
  idToDelete: null,
};

export default (state = initialData, action: ParticipantiListAction): ParticipantiListState => {
  switch (action.type) {
    case ParticipantiListActionTypes.PARTICIPANTI_LIST_FILTERED:
      return {
        ...state,
        rows: action.payload!.rows,
        loading: false,
      };
    case ParticipantiListActionTypes.PARTICIPANTI_LIST_FETCH_STARTED:
      return {
        ...state,
        loading: true,
      };
    case ParticipantiListActionTypes.PARTICIPANTI_LIST_FETCH_SUCCESS:
      return {
        ...state,
        rows: action.payload!.rows,
        loading: false,
        count: action.payload!.count,
      };
    case ParticipantiListActionTypes.PARTICIPANTI_LIST_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        rows: [],
      };
    case ParticipantiListActionTypes.PARTICIPANTI_LIST_DELETE_STARTED:
      return {
        ...state,
        loading: true,
      };
    case ParticipantiListActionTypes.PARTICIPANTI_LIST_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    case ParticipantiListActionTypes.PARTICIPANTI_LIST_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    case ParticipantiListActionTypes.PARTICIPANTI_LIST_OPEN_CONFIRM:
      return {
        ...state,
        loading: false,
        modalOpen: true,
        idToDelete: action.payload.id,
      };
    case ParticipantiListActionTypes.PARTICIPANTI_LIST_CLOSE_CONFIRM:
      return {
        ...state,
        loading: false,
        modalOpen: false,
      };
    default:
      return state;
  }
};
