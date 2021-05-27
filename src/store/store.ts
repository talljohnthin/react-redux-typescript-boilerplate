import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
        // other store enhancers if any
    )
);

export type RootState = ReturnType<typeof store.getState>;

export default store;
