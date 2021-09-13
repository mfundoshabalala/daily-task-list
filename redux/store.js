/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import storage from 'redux/storage';

import { rootReducer } from './reducer';

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let enhancer;
if (typeof window !== 'undefined') {
	enhancer =
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__();
}

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
