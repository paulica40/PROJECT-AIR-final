import list from 'store/reducers/indicatori/indicatoriListReducers';
import form from 'store/reducers/indicatori/indicatoriFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
