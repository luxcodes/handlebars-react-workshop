import axios from 'axios'

export function fetchUser() {
  return {
    type: 'FETCH_USER',
    payload: axios.get("http://rest.learncode.academy/api/wstern/users")
  }
  // return function(dispatch) {
  //   dispatch({type: 'FETCH_USER'})
  //   axios.get("http://rest.learncode.academy/api/wstern/users")
  //     .then((res) => {
  //       dispatch({type: 'FETCH_USER_FULFILLED', payload: res.data })
  //     })
  //     .catch((err) => {
  //       dispatch({type: 'FETCH_USER_REJECTED', payload: err})
  //     })
  // }
}

// export function getUsers(users) {
//   return {
//     type: 'GET_USERS',
//     payload: users
//   }
// }

export function setUserName(name) {
  return {
    type: 'SET_USER_NAME',
    payload: name
  }
}
