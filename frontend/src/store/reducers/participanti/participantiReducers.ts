import list from 'store/reducers/participanti/participantiListReducers';
import form from 'store/reducers/participanti/participantiFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
