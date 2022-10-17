import Errors from 'components/FormItems/error/errors';
import axios from 'axios';
import {
  ParticipantiListActionTypes,
  ParticipantiListAction,
} from 'types/redux/participanti/participantiList';
import { Dispatch } from 'redux';

async function list(filter?: any) {
  const response = await axios.get(
    `/participanti?page=${filter.page}&limit=${filter.limit}&participanti=${
      filter.participanti ? filter.participanti : ''
    }`,
  );
  return response.data;
}

async function filterParticipanti(request: any, filter: any) {
  const response = await axios.get(
    `/participanti?page=${filter.page}&limit=${filter.limit}${request}`,
  );
  return response.data;
}

const actions = {
  doFilter: (request: any, filter: any) => async (dispatch: Dispatch) => {
    try {
      const response = await filterParticipanti(request, filter);

      dispatch({
        type: ParticipantiListActionTypes.PARTICIPANTI_LIST_FILTERED,
        payload: {
          rows: response.rows,
        },
      });
    } catch (error: any) {
      Errors.handle(error);
      dispatch({
        type: ParticipantiListActionTypes.PARTICIPANTI_LIST_FETCH_ERROR,
      });
    }
  },

  doFetch:
    (filter: any, keepPagination = false) =>
    async (dispatch: Dispatch) => {
      try {
        dispatch({
          type: ParticipantiListActionTypes.PARTICIPANTI_LIST_FETCH_STARTED,
          payload: { filter, keepPagination },
        });

        const response = await list(filter);

        dispatch({
          type: ParticipantiListActionTypes.PARTICIPANTI_LIST_FETCH_SUCCESS,
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error: any) {
        Errors.handle(error);

        dispatch({
          type: ParticipantiListActionTypes.PARTICIPANTI_LIST_FETCH_ERROR,
        });
      }
    },

  doDelete: (id: string, filter: any) => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: ParticipantiListActionTypes.PARTICIPANTI_LIST_DELETE_STARTED,
      });

      await axios.delete(`/participanti/${id}`);

      dispatch({
        type: ParticipantiListActionTypes.PARTICIPANTI_LIST_DELETE_SUCCESS,
      });

      const response = await list(filter);
      dispatch({
        type: ParticipantiListActionTypes.PARTICIPANTI_LIST_FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error: any) {
      Errors.handle(error);

      dispatch({
        type: ParticipantiListActionTypes.PARTICIPANTI_LIST_DELETE_ERROR,
      });
    }
  },
  doOpenConfirm: (id: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: ParticipantiListActionTypes.PARTICIPANTI_LIST_OPEN_CONFIRM,
      payload: {
        id: id,
      },
    });
  },
  doCloseConfirm: () => async (dispatch: Dispatch) => {
    dispatch({
      type: ParticipantiListActionTypes.PARTICIPANTI_LIST_CLOSE_CONFIRM,
    });
  },
};

export default actions;
