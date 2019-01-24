import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'

import SampleContainer from './containers/sampleContainer'

import reducer from './reducers'

const middlewares = [thunk];
if(process.env.NODE_ENV === 'development'){
  middlewares.push(logger);
}

const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
);

const App = props => {
    return <Provider {...props} store={store}>
        <SampleContainer />
    </Provider>
}

render(<App />, document.getElementById('root'));