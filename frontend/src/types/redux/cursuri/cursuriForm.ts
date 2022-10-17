export interface CursuriFormState {
  findLoading: boolean;
  saveLoading: boolean;
  record: null | any;
}

export enum CursuriFormActionTypes {
  CURSURI_FORM_RESET = 'CURSURI_FORM_RESET',
  CURSURI_FORM_FIND_STARTED = 'CURSURI_FORM_FIND_STARTED',
  CURSURI_FORM_FIND_SUCCESS = 'CURSURI_FORM_FIND_SUCCESS',
  CURSURI_FORM_FIND_ERROR = 'CURSURI_FORM_FIND_ERROR',
  CURSURI_FORM_CREATE_STARTED = 'CURSURI_FORM_CREATE_STARTED',
  CURSURI_FORM_CREATE_SUCCESS = 'CURSURI_FORM_CREATE_SUCCESS',
  CURSURI_FORM_CREATE_ERROR = 'CURSURI_FORM_CREATE_ERROR',
  CURSURI_FORM_UPDATE_STARTED = 'CURSURI_FORM_UPDATE_STARTED',
  CURSURI_FORM_UPDATE_SUCCESS = 'CURSURI_FORM_UPDATE_SUCCESS',
  CURSURI_FORM_UPDATE_ERROR = 'CURSURI_FORM_UPDATE_ERROR',
}

interface CursuriFormReset {
  type: CursuriFormActionTypes.CURSURI_FORM_RESET;
}

interface CursuriFormFindStarted {
  type: CursuriFormActionTypes.CURSURI_FORM_FIND_STARTED;
}

interface CursuriFormFindSuccess {
  type: CursuriFormActionTypes.CURSURI_FORM_FIND_SUCCESS;
  payload: any;
}

interface CursuriFormFindError {
  type: CursuriFormActionTypes.CURSURI_FORM_FIND_ERROR;
}

interface CursuriFormCreateStarted {
  type: CursuriFormActionTypes.CURSURI_FORM_CREATE_STARTED;
}

interface CursuriFormCreateSuccess {
  type: CursuriFormActionTypes.CURSURI_FORM_CREATE_SUCCESS;
}

interface CursuriFormCreateError {
  type: CursuriFormActionTypes.CURSURI_FORM_CREATE_ERROR;
}

interface CursuriFormUpdateStarted {
  type: CursuriFormActionTypes.CURSURI_FORM_UPDATE_STARTED;
}

interface CursuriFormUpdateSuccess {
  type: CursuriFormActionTypes.CURSURI_FORM_UPDATE_SUCCESS;
}

interface CursuriFormUpdateError {
  type: CursuriFormActionTypes.CURSURI_FORM_UPDATE_ERROR;
}

export type CursuriFormAction =
  | CursuriFormReset
  | CursuriFormFindStarted
  | CursuriFormFindSuccess
  | CursuriFormFindError
  | CursuriFormCreateStarted
  | CursuriFormCreateSuccess
  | CursuriFormCreateError
  | CursuriFormUpdateStarted
  | CursuriFormUpdateSuccess
  | CursuriFormUpdateError;
