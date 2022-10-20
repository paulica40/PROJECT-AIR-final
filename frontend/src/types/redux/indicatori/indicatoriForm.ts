export interface IndicatoriFormState {
  findLoading: boolean;
  saveLoading: boolean;
  record: null | any;
}

export enum IndicatoriFormActionTypes {
  INDICATORI_FORM_RESET = 'INDICATORI_FORM_RESET',
  INDICATORI_FORM_FIND_STARTED = 'INDICATORI_FORM_FIND_STARTED',
  INDICATORI_FORM_FIND_SUCCESS = 'INDICATORI_FORM_FIND_SUCCESS',
  INDICATORI_FORM_FIND_ERROR = 'INDICATORI_FORM_FIND_ERROR',
  INDICATORI_FORM_CREATE_STARTED = 'INDICATORI_FORM_CREATE_STARTED',
  INDICATORI_FORM_CREATE_SUCCESS = 'INDICATORI_FORM_CREATE_SUCCESS',
  INDICATORI_FORM_CREATE_ERROR = 'INDICATORI_FORM_CREATE_ERROR',
  INDICATORI_FORM_UPDATE_STARTED = 'INDICATORI_FORM_UPDATE_STARTED',
  INDICATORI_FORM_UPDATE_SUCCESS = 'INDICATORI_FORM_UPDATE_SUCCESS',
  INDICATORI_FORM_UPDATE_ERROR = 'INDICATORI_FORM_UPDATE_ERROR',
}

interface IndicatoriFormReset {
  type: IndicatoriFormActionTypes.INDICATORI_FORM_RESET;
}

interface IndicatoriFormFindStarted {
  type: IndicatoriFormActionTypes.INDICATORI_FORM_FIND_STARTED;
}

interface IndicatoriFormFindSuccess {
  type: IndicatoriFormActionTypes.INDICATORI_FORM_FIND_SUCCESS;
  payload: any;
}

interface IndicatoriFormFindError {
  type: IndicatoriFormActionTypes.INDICATORI_FORM_FIND_ERROR;
}

interface IndicatoriFormCreateStarted {
  type: IndicatoriFormActionTypes.INDICATORI_FORM_CREATE_STARTED;
}

interface IndicatoriFormCreateSuccess {
  type: IndicatoriFormActionTypes.INDICATORI_FORM_CREATE_SUCCESS;
}

interface IndicatoriFormCreateError {
  type: IndicatoriFormActionTypes.INDICATORI_FORM_CREATE_ERROR;
}

interface IndicatoriFormUpdateStarted {
  type: IndicatoriFormActionTypes.INDICATORI_FORM_UPDATE_STARTED;
}

interface IndicatoriFormUpdateSuccess {
  type: IndicatoriFormActionTypes.INDICATORI_FORM_UPDATE_SUCCESS;
}

interface IndicatoriFormUpdateError {
  type: IndicatoriFormActionTypes.INDICATORI_FORM_UPDATE_ERROR;
}

export type IndicatoriFormAction =
  | IndicatoriFormReset
  | IndicatoriFormFindStarted
  | IndicatoriFormFindSuccess
  | IndicatoriFormFindError
  | IndicatoriFormCreateStarted
  | IndicatoriFormCreateSuccess
  | IndicatoriFormCreateError
  | IndicatoriFormUpdateStarted
  | IndicatoriFormUpdateSuccess
  | IndicatoriFormUpdateError;
