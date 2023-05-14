type initType =  {
    isLoading: boolean
}

const initGlobalState: initType = {
    isLoading: false
}

export const globalReducer = (state = initGlobalState, action: any) => {
    if (action.type === 'SET_LOADING') {
        return {
          ...state,
          isLoading: action.value,
        };
    }


    return state;
}
