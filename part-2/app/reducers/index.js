import { combineReducers } from 'redux'

import tweets from './tweetsReducer'
import users from './usersReducer'

export default combineReducers({
  tweets,
  users
})
