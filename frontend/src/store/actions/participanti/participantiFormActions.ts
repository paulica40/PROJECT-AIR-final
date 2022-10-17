import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'store/actions/authActions';
import { toast } from 'react-toastify';
import {
  ParticipantiFormAction,
  ParticipantiFormActionTypes,
} from 'types/redux/participanti/participantiForm';
import { Dispatch } from 'redux';

const actions = {
  doNew: () => {
    return {
      type: ParticipantiFormActionTypes.PARTICIPANTI_FORM_RESET,
    };
  },

  doFind: (id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: ParticipantiFormActionTypes.PARTICIPANTI_FORM_FIND_STARTED,
      });

      axios.get(`/participanti/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: ParticipantiFormActionTypes.PARTICIPANTI_FORM_FIND_SUCCESS,
          payload: record,
        });
      });
    } catch (error: any) {
      Errors.handle(error);

      dispatch({
        type: ParticipantiFormActionTypes.PARTICIPANTI_FORM_FIND_ERROR,
      });

      dispatch(push('/admin/participanti'));
    }
  },

  doCreate:
    (values: any) => async (dispatch: Dispatch<ParticipantiFormAction | Function | any>) => {
      try {
        dispatch({
          type: ParticipantiFormActionTypes.PARTICIPANTI_FORM_CREATE_STARTED,
        });

        axios.post('/participanti', { data: values }).then((res) => {
          dispatch({
            type: ParticipantiFormActionTypes.PARTICIPANTI_FORM_CREATE_SUCCESS,
          });

          toast.success('Participanti created');
          dispatch(push('/admin/participanti'));
        });
      } catch (error: any) {
        Errors.handle(error);

        dispatch({
          type: ParticipantiFormActionTypes.PARTICIPANTI_FORM_CREATE_ERROR,
        });
      }
    },

  doUpdate:
    (id: string, values: any, isProfile: boolean) =>
    async (dispatch: Dispatch<ParticipantiFormAction | Function | any>) => {
      try {
        dispatch({
          type: ParticipantiFormActionTypes.PARTICIPANTI_FORM_UPDATE_STARTED,
        });

        await axios.put(`/participanti/${id}`, { id, data: values });

        dispatch(doInit());

        dispatch({
          type: ParticipantiFormActionTypes.PARTICIPANTI_FORM_UPDATE_SUCCESS,
        });

        if (isProfile) {
          toast.success('Profile updated');
        } else {
          toast.success('Participanti updated');
          dispatch(push('/admin/participanti'));
        }
      } catch (error: any) {
        Errors.handle(error);

        dispatch({
          type: ParticipantiFormActionTypes.PARTICIPANTI_FORM_UPDATE_ERROR,
        });
      }
    },
};

export default actions;
