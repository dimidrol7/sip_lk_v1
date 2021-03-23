import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const configureStore = (moduleName, reducers) => {
    let store = null;

    if (process.env.NODE_ENV === 'development') {
        const loggerMiddleware = createLogger();
        store = createStore(
            reducers,
            applyMiddleware(
                thunkMiddleware, // lets us dispatch() functions
                loggerMiddleware, // neat middleware that logs actions
            ),
        );
    } else {
        store = createStore(
            reducers,
            applyMiddleware(thunkMiddleware),
        );
    }
    return store;
};

export default configureStore;
