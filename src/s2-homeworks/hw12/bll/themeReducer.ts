const initState = {
  themeId: 1,
};

export const themeReducer = (state = initState, action: ActionType): State => {
  switch (action.type) {
    case 'SET_THEME_ID': {
      return { ...state, themeId: action.id };
    }

    default:
      return state;
  }
};

export const changeThemeIdAC = (id: number): { type: string; id: number } => ({
  type: 'SET_THEME_ID',
  id,
});

type ActionType = ReturnType<typeof changeThemeIdAC>;
type State = typeof initState;
