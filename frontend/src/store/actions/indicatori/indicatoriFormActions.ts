import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'store/actions/authActions';
import { toast } from 'react-toastify';
import {
  IndicatoriFormAction,
  IndicatoriFormActionTypes,
} from 'types/redux/indicatori/indicatoriForm';
import { Dispatch } from 'redux';

const actions = {
  doNew: () => {
    return {
      type: IndicatoriFormActionTypes.INDICATORI_FORM_RESET,
    };
  },

  doFind: (id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: IndicatoriFormActionTypes.INDICATORI_FORM_FIND_STARTED,
      });

      axios.get(`/indicatori/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: IndicatoriFormActionTypes.INDICATORI_FORM_FIND_SUCCESS,
          payload: record,
        });
      });
    } catch (error: any) {
      Errors.handle(error);

      dispatch({
        type: IndicatoriFormActionTypes.INDICATORI_FORM_FIND_ERROR,
      });

      dispatch(push('/admin/indicatori'));
    }
  },

  doCreate: (values: any) => async (dispatch: Dispatch<IndicatoriFormAction | Function | any>) => {
    try {
      dispatch({
        type: IndicatoriFormActionTypes.INDICATORI_FORM_CREATE_STARTED,
      });

      axios.post('/indicatori', { data: values }).then((res) => {
        dispatch({
          type: IndicatoriFormActionTypes.INDICATORI_FORM_CREATE_SUCCESS,
        });

        toast.success('Indicatori created');
        dispatch(push('/admin/indicatori'));
      });
    } catch (error: any) {
      Errors.handle(error);

      dispatch({
        type: IndicatoriFormActionTypes.INDICATORI_FORM_CREATE_ERROR,
      });
    }
  },

  doUpdate:
    (id: string, values: any, isProfile: boolean) =>
    async (dispatch: Dispatch<IndicatoriFormAction | Function | any>) => {
      try {
        dispatch({
          type: IndicatoriFormActionTypes.INDICATORI_FORM_UPDATE_STARTED,
        });

        await axios.put(`/indicatori/${id}`, { id, data: values });

        dispatch(doInit());

        dispatch({
          type: IndicatoriFormActionTypes.INDICATORI_FORM_UPDATE_SUCCESS,
        });

        if (isProfile) {
          toast.success('Profile updated');
        } else {
          toast.success('Indicatori updated');
          dispatch(push('/admin/indicatori'));
        }
      } catch (error: any) {
        Errors.handle(error);

        dispatch({
          type: IndicatoriFormActionTypes.INDICATORI_FORM_UPDATE_ERROR,
        });
      }
    },
};

export default actions;
