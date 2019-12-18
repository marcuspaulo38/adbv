import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

const routes = [
  {
    path: 'Calculator',
    component: asyncComponent(() => import('../Page/Calculator/index')),
  },
  {
    path: 'CentroDeCusto',
    component:asyncComponent(() =>import('../Page/CentroDeCusto/index')),
  },
  {
    path: 'CadastroEA',
    component:asyncComponent(() =>import('../Page/CadastroEA/index')),
  },
  {
    path: 'Listagem',
    component:asyncComponent(() =>import('../Page/Listagem/index')),
  }
];

class AppRouter extends Component {
  renderRoutes(routes, url, isLoggedIn) {
    if (!routes) return;
    return routes.map(singleRoute => {
      const { path, exact, restrict, ...otherProps } = singleRoute;
      const fullPath = `${url}/${singleRoute.path}`;

      let components;

      if (restrict) {
        components = (
          <Redirect
            exact={exact === false ? false : true}
            path={fullPath}
            key={singleRoute.path}
            {...otherProps}
          />
        );
      } else {
        components = (
          <Route
            exact={exact === false ? false : true}
            key={singleRoute.path}
            path={fullPath}
            {...otherProps}
          ></Route>
        );
      }

      if (singleRoute.children) {
        components = (
          <>
            <components></components>
            {this.renderRoutes(singleRoute.children, fullPath, isLoggedIn)}
          </>
        );
      }

      return components;
    });
  }

  render() {
    const { url, style, isLoggedIn } = this.props;
    return (
      <div style={style}>{this.renderRoutes(routes, url, isLoggedIn)}</div>
    );
  }
}

export default AppRouter;
