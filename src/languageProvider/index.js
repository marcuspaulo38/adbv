import Enlang from './entries/en-US';
import Zhlang from './entries/zh-Hans-CN';
import Salang from './entries/ar_SA';
import Itlang from './entries/it_IT';
import Eslang from './entries/es_ES';
import Frlang from './entries/fr_FR';
import Brlang from './entries/pt_BR';
import { addLocaleData } from 'react-intl';

const AppLocale = {
  en: Enlang,
  zh: Zhlang,
  sa: Salang,
  it: Itlang,
  es: Eslang,
  fr: Frlang,
  pt: Brlang,
};
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.zh.data);
addLocaleData(AppLocale.sa.data);
addLocaleData(AppLocale.it.data);
addLocaleData(AppLocale.es.data);
addLocaleData(AppLocale.fr.data);
addLocaleData(AppLocale.pt.data);

export default AppLocale;
