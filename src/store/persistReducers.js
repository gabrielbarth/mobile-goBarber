import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'gobarber', // app name on persist
      storage: AsyncStorage,
      whitelist: ['auth', 'user'], // storaged reducers
    },
    reducers
  );
  return persistedReducer;
};
