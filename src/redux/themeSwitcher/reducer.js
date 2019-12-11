import actions from './actions';

const initState = {
  isActivated: false,
  changeThemes: '',
  topbarTheme: '',
  sidebarTheme: '',
  layoutTheme: '',
};

export default function(state = initState, action) {
  switch (action.type) {
    case actions.SWITCH_ACTIVATION:
      return {
        ...state,
        isActivated: !state.isActivated,
      };
    case actions.CHANGE_THEME:
      return {
        ...state,
        [action.attribute]: action.theme,
      };
    default:
      return state;
  }
}
