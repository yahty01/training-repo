const initState = {
    isLoading: false,
}

export type InitialState = {
    isLoading: boolean
}

export const loadingReducer = (state: InitialState = initState, action: ActionType): InitialState => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING": {
            return {...state, isLoading: action.isLoading}
        }

        default:
            return state
    }
}

export type ActionType =
  | LoadingActionType

export const loadingAC = (isLoading: boolean): LoadingActionType => {
    return { type: 'CHANGE_LOADING', isLoading,} as const
}

export type LoadingActionType = {
    type: 'CHANGE_LOADING';
    isLoading: boolean;
};
