import {
  IndicatoriFormState,
  IndicatoriFormAction,
  IndicatoriFormActionTypes,
} from 'types/redux/indicatori/indicatoriForm';

const initialData: IndicatoriFormState = {
  findLoading: false,
  saveLoading: false,
  record: null,
};

export default (state = initialData, action: IndicatoriFormAction): IndicatoriFormState => {
  switch (action.type) {
    case IndicatoriFormActionTypes.INDICATORI_FORM_RESET:
      return {
        ...state,
      };
    case IndicatoriFormActionTypes.INDICATORI_FORM_FIND_STARTED:
      return {
        ...state,
        record: null,
        findLoading: true,
      };
    case IndicatoriFormActionTypes.INDICATORI_FORM_FIND_SUCCESS:
      return {
        ...state,
        record: action.payload,
        findLoading: false,
      };
    case IndicatoriFormActionTypes.INDICATORI_FORM_FIND_ERROR:
      return {
        ...state,
        record: null,
        findLoading: false,
      };
    case IndicatoriFormActionTypes.INDICATORI_FORM_CREATE_STARTED:
      return {
        ...state,
        saveLoading: true,
      };
    case IndicatoriFormActionTypes.INDICATORI_FORM_CREATE_SUCCESS:
      return {
        ...state,
        saveLoading: false,
      };
    case IndicatoriFormActionTypes.INDICATORI_FORM_CREATE_ERROR:
      return {
        ...state,
        saveLoading: false,
      };
    case IndicatoriFormActionTypes.INDICATORI_FORM_UPDATE_STARTED:
      return {
        ...state,
        saveLoading: true,
      };
    case IndicatoriFormActionTypes.INDICATORI_FORM_UPDATE_SUCCESS:
      return {
        ...state,
        saveLoading: false,
      };
    case IndicatoriFormActionTypes.INDICATORI_FORM_UPDATE_ERROR:
      return {
        ...state,
        saveLoading: false,
      };
    default:
      return state;
  }
};
