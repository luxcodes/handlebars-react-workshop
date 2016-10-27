import React from 'react'

export default class User extends React.Component {
  render () {
    return (
        <div>
          <li key={this.props.id}>{this.props.name}</li>
        </div>
    )
  }
}
