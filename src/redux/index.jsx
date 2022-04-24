import { applyMiddleware, combineReducers, createStore } from 'redux';
import { userReducer } from './userReduser';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

const persistConfig = {
   key: 'root',
   storage,
}

const rootReducer = combineReducers({
   users:userReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk)));
const persistore = persistStore(store)
export {persistore}


