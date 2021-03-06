import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import trackerApp from './reducers';
import App from 'components/App';

const initialStore = {
  channels: [],
  patterns: [],
  song: {},
  views: {}
};

const store = createStore(trackerApp, module.hot && module.hot.data && module.hot.data.counter || initialStore );

const unsub = store.subscribe(() => {
  console.log("State changed ", store.getState());
});

if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default);
  });
  module.hot.accept();

  module.hot.dispose((data) => {
    data.counter = store.getState();
    [].slice.apply(document.querySelector('#app').children).forEach(function(c) { c.remove() });
  });
}

const load = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#app')
  );
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}
