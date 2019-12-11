import React from 'react';
import ReactDOM from 'react-dom';

import DashApp from './dashApp';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

// eslint-disable-next-line no-undef
ReactDOM.render(<DashApp />, document.getElementById('root'));
serviceWorker.register();
