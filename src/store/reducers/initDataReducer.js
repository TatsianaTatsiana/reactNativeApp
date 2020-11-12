const initialState = {
  initData: []
}

export const initDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_INITDATA':
      return { ...state, initData: action.payload }
    default:
      return state
  }
}