import Errors from 'components/FormItems/error/errors';
import axios from 'axios';
import { CursuriListActionTypes, CursuriListAction } from 'types/redux/cursuri/cursuriList';
import { Dispatch } from 'redux';

async function list(filter?: any) {
  const response = await axios.get(
    `/cursuri?page=${filter.page}&limit=${filter.limit}&cursuri=${
      filter.cursuri ? filter.cursuri : ''
    }`,
  );
  return response.data;
}

async function filterCursuri(request: any, filter: any) {
  const response = await axios.get(`/cursuri?page=${filter.page}&limit=${filter.limit}${request}`);
  return response.data;
}

const actions = {
  doFilter: (request: any, filter: any) => async (dispatch: Dispatch) => {
    try {
      const response = await filterCursuri(request, filter);

      dispatch({
        type: CursuriListActionTypes.CURSURI_LIST_FILTERED,
        payload: {
          rows: response.rows,
        },
      });
    } catch (error: any) {
      Errors.handle(error);
      dispatch({
        type: CursuriListActionTypes.CURSURI_LIST_FETCH_ERROR,
      });
    }
  },

  doFetch:
    (filter: any, keepPagination = false) =>
    async (dispatch: Dispatch) => {
      try {
        dispatch({
          type: CursuriListActionTypes.CURSURI_LIST_FETCH_STARTED,
          payload: { filter, keepPagination },
        });

        const response = await list(filter);

        dispatch({
          type: CursuriListActionTypes.CURSURI_LIST_FETCH_SUCCESS,
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error: any) {
        Errors.handle(error);

        dispatch({
          type: CursuriListActionTypes.CURSURI_LIST_FETCH_ERROR,
        });
      }
    },

  doDelete: (id: string, filter: any) => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: CursuriListActionTypes.CURSURI_LIST_DELETE_STARTED,
      });

      await axios.delete(`/cursuri/${id}`);

      dispatch({
        type: CursuriListActionTypes.CURSURI_LIST_DELETE_SUCCESS,
      });

      const response = await list(filter);
      dispatch({
        type: CursuriListActionTypes.CURSURI_LIST_FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error: any) {
      Errors.handle(error);

      dispatch({
        type: CursuriListActionTypes.CURSURI_LIST_DELETE_ERROR,
      });
    }
  },
  doOpenConfirm: (id: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: CursuriListActionTypes.CURSURI_LIST_OPEN_CONFIRM,
      payload: {
        id: id,
      },
    });
  },
  doCloseConfirm: () => async (dispatch: Dispatch) => {
    dispatch({
      type: CursuriListActionTypes.CURSURI_LIST_CLOSE_CONFIRM,
    });
  },
};

export default actions;
