import antdBR from 'antd/lib/locale-provider/pt_BR';
import appLocaleData from 'react-intl/locale-data/pt';
import brMessages from '../locales/pt_BR.json';

const brLang = {
  messages: {
    ...brMessages
  },
  antd: antdBR,
  locale: 'pt-BR',
  data: appLocaleData
};
export default brLang;
