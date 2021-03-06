import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';


const routes = [
  {
   path: '',
	 component:asyncComponent(() =>import('../Page/LandingPage/index')),
  },
  {
   path: 'HistoricoAtividades',
	 component:asyncComponent(() =>import('../Page/LPHistoricoAtividades/index')),
  },
  
  {
   path: 'GestaoDeApontamento',
   component:asyncComponent(() =>import('../Page/GestaoDeApontamento/index')),
  },
  {
   path: 'Aprovacao',
   component:asyncComponent(() =>import('../Page/Aprovacao/index')),
  },
  {
    path: 'CentroDeCusto',
    component:asyncComponent(() =>import('../Page/CentroDeCusto/index')),
  },
  {
    path: 'EscAvul',
    component:asyncComponent(() =>import('../Page/EscAvul/index')),
  },
  {
   path: 'PeriodoDeFechamento',
	 component:asyncComponent(() =>import('../Page/PeriodoDeFechamento/index')),
  },
  {
    path: 'Usuario',
    component:asyncComponent(() =>import('../Page/Usuario/index')),
  },
  {
	path: 'Plantonista',
	component:asyncComponent(() =>import('../Page/Plantonista/index')),
  },
  
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
