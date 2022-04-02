import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { reducer } from '../reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const projectPersistReducer = persistReducer(persistConfig, reducer);

const middleware = applyMiddleware(thunk);

const store = createStore(projectPersistReducer, composeWithDevTools(middleware));

const persistor = persistStore(store);

export { store, persistor };
