import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import * as reducers from './reducers'

let store = null
if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger({
        level: 'info',
        collapsed: true
    })

    store = createStore(
        combineReducers({ ...reducers }), 
        compose(applyMiddleware(logger))
    )
}
else {
	store = createStore(combineReducers({ ...reducers }))
}

export default store