import axios from 'axios'

export function fetchTweets() {
  return function(dispatch) {
    dispatch({type: 'FETCH_TWEETS'})
    axios.get('http://rest.learncode.academy/api/test123/tweets')
      .then((res) => {
        dispatch({type: 'FETCH_TWEETS_FULFILLED', payload: res.data})
      })
      .catch((err) => {
        dispatch({type: 'FETCH_TWEETS_REJECTED', payload: err})
      })
  }
}
