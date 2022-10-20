import list from 'store/reducers/cursuri/cursuriListReducers';
import form from 'store/reducers/cursuri/cursuriFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
