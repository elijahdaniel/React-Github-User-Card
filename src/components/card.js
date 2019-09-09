import React, { Component } from 'react'
import CardLayout from './cardLayout'

export default class Card extends Component {
  render() {
    return (
      <div className='card-container'>
        {this.props.char.map(item => (
          <CardLayout key={item.id} item={item} />
        ))}
      </div>
    )
  }
}
