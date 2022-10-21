import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'store/actions/authActions';
import { toast } from 'react-toastify';
import { CursuriFormAction, CursuriFormActionTypes } from 'types/redux/cursuri/cursuriForm';
import { Dispatch } from 'redux';

const actions = {
  doNew: () => {
    return {
      type: CursuriFormActionTypes.CURSURI_FORM_RESET,
    };
  },

  doFind: (id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: CursuriFormActionTypes.CURSURI_FORM_FIND_STARTED,
      });

      axios.get(`/cursuri/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: CursuriFormActionTypes.CURSURI_FORM_FIND_SUCCESS,
          payload: record,
        });
      });
    } catch (error: any) {
      Errors.handle(error);

      dispatch({
        type: CursuriFormActionTypes.CURSURI_FORM_FIND_ERROR,
      });

      dispatch(push('/admin/cursuri'));
    }
  },

  doCreate: (values: any) => async (dispatch: Dispatch<CursuriFormAction | Function | any>) => {
    try {
      dispatch({
        type: CursuriFormActionTypes.CURSURI_FORM_CREATE_STARTED,
      });

      axios.post('/cursuri', { data: values }).then((res) => {
        dispatch({
          type: CursuriFormActionTypes.CURSURI_FORM_CREATE_SUCCESS,
        });

        toast.success('Cursuri created');
        dispatch(push('/admin/cursuri'));
      });
    } catch (error: any) {
      Errors.handle(error);

      dispatch({
        type: CursuriFormActionTypes.CURSURI_FORM_CREATE_ERROR,
      });
    }
  },

  doUpdate:
    (id: string, values: any, isProfile: boolean) =>
    async (dispatch: Dispatch<CursuriFormAction | Function | any>) => {
      try {
        dispatch({
          type: CursuriFormActionTypes.CURSURI_FORM_UPDATE_STARTED,
        });

        await axios.put(`/cursuri/${id}`, { id, data: values });

        dispatch(doInit());

        dispatch({
          type: CursuriFormActionTypes.CURSURI_FORM_UPDATE_SUCCESS,
        });

        if (isProfile) {
          toast.success('Profile updated');
        } else {
          toast.success('Cursuri updated');
          dispatch(push('/admin/cursuri'));
        }
      } catch (error: any) {
        Errors.handle(error);

        dispatch({
          type: CursuriFormActionTypes.CURSURI_FORM_UPDATE_ERROR,
        });
      }
    },
};

export default actions;
