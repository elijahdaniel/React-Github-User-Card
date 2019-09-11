import React, { Component } from 'react'

export default class CardLayout extends Component {
  render() {
    return (
      <div className='card'>
        <img
          className='f-img'
          src={this.props.item.avatar_url}
          alt={this.props.item.login}
        />
        <h3 className='f-username'>{this.props.item.login}</h3>
      </div>
    )
  }
}
