import React from 'react'
import { connect } from 'react-redux'
import * as userActions from '../actions/userActions'
import * as tweetsActions from '../actions/tweetsActions'

import User from './user.jsx'

class Layout extends React.Component {
	constructor () {
    super()
    this.changeTitle = this.changeTitle.bind(this)
    this.fetchTweets = this.fetchTweets.bind(this)
	}

  componentWillMount () {
    this.props.dispatch(userActions.fetchUser())
  }

  componentDidMount () {

  }

  fetchTweets () {
    this.props.dispatch(tweetsActions.fetchTweets())
  }

	changeTitle (title) {
    this.setState({title: title})
	}

	render () {
    const { user, tweets } = this.props
    let tweetButton;
    let mappedUsers;

    if (user) {
      mappedUsers = user.map(user => <User key={user.id} name={user.name} />)
    }
    if (!tweets.length) {
      tweetButton = <button onClick={this.fetchTweets}>load tweets</button>
    }
    const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>)
    return(
      <div>
        {tweetButton}
        <ul>{mappedUsers}</ul>
        <ul>{mappedTweets}</ul>
      </div>
		)
	}
}

const mapStateToProps = (store) => {
  return {
    user: store.users.users,
    userFetched: store.users.fetched,
    tweets: store.tweets.tweets
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userActions: userActions.fetchUser
  }
}

export default connect(mapStateToProps)(Layout)
