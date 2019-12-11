import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';

import App from './containers/App/App';

const PublicRoutes = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Router>
        <App history={history} />
      </Router>
    </ConnectedRouter>
  );
};

export default connect(state => ({
  loading: state.App.loadingGlobal,
}))(PublicRoutes);
