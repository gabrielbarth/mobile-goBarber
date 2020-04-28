/* eslint-disable camelcase */
import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassowrd ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Success', 'Successful profile update');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert('Update Failure', 'Profile update error, check your data');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
