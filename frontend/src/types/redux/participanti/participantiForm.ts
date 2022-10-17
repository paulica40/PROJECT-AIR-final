export interface ParticipantiFormState {
  findLoading: boolean;
  saveLoading: boolean;
  record: null | any;
}

export enum ParticipantiFormActionTypes {
  PARTICIPANTI_FORM_RESET = 'PARTICIPANTI_FORM_RESET',
  PARTICIPANTI_FORM_FIND_STARTED = 'PARTICIPANTI_FORM_FIND_STARTED',
  PARTICIPANTI_FORM_FIND_SUCCESS = 'PARTICIPANTI_FORM_FIND_SUCCESS',
  PARTICIPANTI_FORM_FIND_ERROR = 'PARTICIPANTI_FORM_FIND_ERROR',
  PARTICIPANTI_FORM_CREATE_STARTED = 'PARTICIPANTI_FORM_CREATE_STARTED',
  PARTICIPANTI_FORM_CREATE_SUCCESS = 'PARTICIPANTI_FORM_CREATE_SUCCESS',
  PARTICIPANTI_FORM_CREATE_ERROR = 'PARTICIPANTI_FORM_CREATE_ERROR',
  PARTICIPANTI_FORM_UPDATE_STARTED = 'PARTICIPANTI_FORM_UPDATE_STARTED',
  PARTICIPANTI_FORM_UPDATE_SUCCESS = 'PARTICIPANTI_FORM_UPDATE_SUCCESS',
  PARTICIPANTI_FORM_UPDATE_ERROR = 'PARTICIPANTI_FORM_UPDATE_ERROR',
}

interface ParticipantiFormReset {
  type: ParticipantiFormActionTypes.PARTICIPANTI_FORM_RESET;
}

interface ParticipantiFormFindStarted {
  type: ParticipantiFormActionTypes.PARTICIPANTI_FORM_FIND_STARTED;
}

interface ParticipantiFormFindSuccess {
  type: ParticipantiFormActionTypes.PARTICIPANTI_FORM_FIND_SUCCESS;
  payload: any;
}

interface ParticipantiFormFindError {
  type: ParticipantiFormActionTypes.PARTICIPANTI_FORM_FIND_ERROR;
}

interface ParticipantiFormCreateStarted {
  type: ParticipantiFormActionTypes.PARTICIPANTI_FORM_CREATE_STARTED;
}

interface ParticipantiFormCreateSuccess {
  type: ParticipantiFormActionTypes.PARTICIPANTI_FORM_CREATE_SUCCESS;
}

interface ParticipantiFormCreateError {
  type: ParticipantiFormActionTypes.PARTICIPANTI_FORM_CREATE_ERROR;
}

interface ParticipantiFormUpdateStarted {
  type: ParticipantiFormActionTypes.PARTICIPANTI_FORM_UPDATE_STARTED;
}

interface ParticipantiFormUpdateSuccess {
  type: ParticipantiFormActionTypes.PARTICIPANTI_FORM_UPDATE_SUCCESS;
}

interface ParticipantiFormUpdateError {
  type: ParticipantiFormActionTypes.PARTICIPANTI_FORM_UPDATE_ERROR;
}

export type ParticipantiFormAction =
  | ParticipantiFormReset
  | ParticipantiFormFindStarted
  | ParticipantiFormFindSuccess
  | ParticipantiFormFindError
  | ParticipantiFormCreateStarted
  | ParticipantiFormCreateSuccess
  | ParticipantiFormCreateError
  | ParticipantiFormUpdateStarted
  | ParticipantiFormUpdateSuccess
  | ParticipantiFormUpdateError;
