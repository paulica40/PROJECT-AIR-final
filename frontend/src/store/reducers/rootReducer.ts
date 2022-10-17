import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { store } from '../index';

import authReducer from 'store/reducers/authReducer';
import alertsReducer from 'store/reducers/alertsReducer';
import navigationReducer from 'store/reducers/navigationReducer';
import layoutReducer from 'store/reducers/layoutReducer';

import users from 'store/reducers/users/usersReducers';

import participanti from 'store/reducers/participanti/participantiReducers';

import indicatori from 'store/reducers/indicatori/indicatoriReducers';

import cursuri from 'store/reducers/cursuri/cursuriReducers';

export const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    layout: layoutReducer,
    alerts: alertsReducer,
    auth: authReducer,
    navigation: navigationReducer,

    users,

    participanti,

    indicatori,

    cursuri,
  });

export type RootState = ReturnType<typeof store.getState>;
