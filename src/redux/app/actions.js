export function getView(width) {
  let newView = 'MobileView';
  if (width > 1220) {
    newView = 'DesktopView';
  } else if (width > 767) {
    newView = 'TabView';
  }
  return newView;
}

export const loading = loadingState => {
  return dispatch => {
    return dispatch({
      type: actions.LOADING,
      payload: loadingState,
    });
  };
};

export const loadingGlobal = loadingState => {
  return dispatch => {
    return dispatch({
      type: actions.LOADING_GLOBAL,
      payload: loadingState,
    });
  };
};

const actions = {
  LOADING: 'LOADING',
  LOADING_GLOBAL: 'LOADING_GLOBAL',
  COLLPSE_CHANGE: 'COLLPSE_CHANGE',
  COLLPSE_OPEN_DRAWER: 'COLLPSE_OPEN_DRAWER',
  CHANGE_OPEN_KEYS: 'CHANGE_OPEN_KEYS',
  TOGGLE_ALL: 'TOGGLE_ALL',
  CHANGE_CURRENT: 'CHANGE_CURRENT',
  CLOSE_ALL: 'CLOSE_ALL',

  toggleCollapsed: () => ({
    type: actions.COLLPSE_CHANGE,
  }),
  toggleAll: (width, height) => {
    const view = getView(width);
    const collapsed = view !== 'DesktopView';
    return {
      type: actions.TOGGLE_ALL,
      collapsed,
      view,
      height,
    };
  },
  toggleOpenDrawer: () => ({
    type: actions.COLLPSE_OPEN_DRAWER,
  }),
  changeOpenKeys: openKeys => ({
    type: actions.CHANGE_OPEN_KEYS,
    openKeys,
  }),
  changeCurrent: current => ({
    type: actions.CHANGE_CURRENT,
    current,
  }),
  closeAll: () => ({ type: actions.CLOSE_ALL }),
};
export default actions;
