import {
  ParticipantiFormState,
  ParticipantiFormAction,
  ParticipantiFormActionTypes,
} from 'types/redux/participanti/participantiForm';

const initialData: ParticipantiFormState = {
  findLoading: false,
  saveLoading: false,
  record: null,
};

export default (state = initialData, action: ParticipantiFormAction): ParticipantiFormState => {
  switch (action.type) {
    case ParticipantiFormActionTypes.PARTICIPANTI_FORM_RESET:
      return {
        ...state,
      };
    case ParticipantiFormActionTypes.PARTICIPANTI_FORM_FIND_STARTED:
      return {
        ...state,
        record: null,
        findLoading: true,
      };
    case ParticipantiFormActionTypes.PARTICIPANTI_FORM_FIND_SUCCESS:
      return {
        ...state,
        record: action.payload,
        findLoading: false,
      };
    case ParticipantiFormActionTypes.PARTICIPANTI_FORM_FIND_ERROR:
      return {
        ...state,
        record: null,
        findLoading: false,
      };
    case ParticipantiFormActionTypes.PARTICIPANTI_FORM_CREATE_STARTED:
      return {
        ...state,
        saveLoading: true,
      };
    case ParticipantiFormActionTypes.PARTICIPANTI_FORM_CREATE_SUCCESS:
      return {
        ...state,
        saveLoading: false,
      };
    case ParticipantiFormActionTypes.PARTICIPANTI_FORM_CREATE_ERROR:
      return {
        ...state,
        saveLoading: false,
      };
    case ParticipantiFormActionTypes.PARTICIPANTI_FORM_UPDATE_STARTED:
      return {
        ...state,
        saveLoading: true,
      };
    case ParticipantiFormActionTypes.PARTICIPANTI_FORM_UPDATE_SUCCESS:
      return {
        ...state,
        saveLoading: false,
      };
    case ParticipantiFormActionTypes.PARTICIPANTI_FORM_UPDATE_ERROR:
      return {
        ...state,
        saveLoading: false,
      };
    default:
      return state;
  }
};
