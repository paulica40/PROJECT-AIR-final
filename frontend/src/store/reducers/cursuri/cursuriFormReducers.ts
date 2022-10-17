import {
  CursuriFormState,
  CursuriFormAction,
  CursuriFormActionTypes,
} from 'types/redux/cursuri/cursuriForm';

const initialData: CursuriFormState = {
  findLoading: false,
  saveLoading: false,
  record: null,
};

export default (state = initialData, action: CursuriFormAction): CursuriFormState => {
  switch (action.type) {
    case CursuriFormActionTypes.CURSURI_FORM_RESET:
      return {
        ...state,
      };
    case CursuriFormActionTypes.CURSURI_FORM_FIND_STARTED:
      return {
        ...state,
        record: null,
        findLoading: true,
      };
    case CursuriFormActionTypes.CURSURI_FORM_FIND_SUCCESS:
      return {
        ...state,
        record: action.payload,
        findLoading: false,
      };
    case CursuriFormActionTypes.CURSURI_FORM_FIND_ERROR:
      return {
        ...state,
        record: null,
        findLoading: false,
      };
    case CursuriFormActionTypes.CURSURI_FORM_CREATE_STARTED:
      return {
        ...state,
        saveLoading: true,
      };
    case CursuriFormActionTypes.CURSURI_FORM_CREATE_SUCCESS:
      return {
        ...state,
        saveLoading: false,
      };
    case CursuriFormActionTypes.CURSURI_FORM_CREATE_ERROR:
      return {
        ...state,
        saveLoading: false,
      };
    case CursuriFormActionTypes.CURSURI_FORM_UPDATE_STARTED:
      return {
        ...state,
        saveLoading: true,
      };
    case CursuriFormActionTypes.CURSURI_FORM_UPDATE_SUCCESS:
      return {
        ...state,
        saveLoading: false,
      };
    case CursuriFormActionTypes.CURSURI_FORM_UPDATE_ERROR:
      return {
        ...state,
        saveLoading: false,
      };
    default:
      return state;
  }
};
