export default {
  apiUrl: 'http://yoursite.com/api/',
};

const siteConfig = {
  footerText: 'Lanlink Informática ©2020',
};
const themeConfig = {
  topbar: 'themedefault',
  sidebar: 'themedefault',
  layout: 'themedefault',
  theme: 'themedefault',
};
const language = 'portuguese';

const jwtConfig = {
  fetchUrl: '/api/',
  secretKey: 'secretKey',
};

export { siteConfig, language, themeConfig, jwtConfig };
