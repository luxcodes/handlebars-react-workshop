const initialState = {
  users: [],
  fetching: false,
  fetched: false,
  error: null
}

export default function users(state=initialState, action) {
  switch (action.type) {
    case 'FETCH_USER_PENDING': {
      return {...state, fetching: true}
    }
    case 'FETCH_USER_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'FETCH_USER_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload.data
      }
    }
  }
  return state
}
