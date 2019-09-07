import React, { Component } from 'react'

export default class CardLayout extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.item.login}</h1>
        <img src={this.props.item.avatar_url} alt='' />
      </div>
    )
  }
}
