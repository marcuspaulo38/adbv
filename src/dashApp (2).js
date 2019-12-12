import React from 'react';
import { Provider } from 'react-redux';
import pt_BR from 'antd/es/locale-provider/pt_BR';
import './settings/ReactotronConfig';
import { store, history } from './redux/store';
import { ThemeProvider } from 'styled-components';
import { LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import themes from './settings/themes';
import AppLocale from './languageProvider';
import config, {
  getCurrentLanguage,
} from './containers/LanguageSwitcher/config';
import { themeConfig } from './settings';
import DashAppHolder from './dashAppStyle';
import 'moment/locale/pt-br';
import Router from './router';

const currentAppLocale =
  AppLocale[getCurrentLanguage(config.defaultLanguage || 'english').locale];

const DashApp = () => (
  <LocaleProvider locale={pt_BR}>
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <ThemeProvider theme={themes[themeConfig.theme]}>
        <DashAppHolder>
          <Provider store={store}>
            <Router history={history} />
          </Provider>
        </DashAppHolder>
      </ThemeProvider>
    </IntlProvider>
  </LocaleProvider>
);

export default DashApp;
export { AppLocale };
