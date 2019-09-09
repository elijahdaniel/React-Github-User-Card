import React, { Component } from 'react'
import Card from './components/card'
import CardMain from './components/cardMain'
import { Divider } from 'semantic-ui-react'

import './App.css'

export default class App extends Component {
  state = {
    myCard: [],
    followers: []
  }

  componentDidMount() {
    fetch('https://api.github.com/users/elijahdaniel')
      .then(res => res.json())
      .then(card => this.setState({ myCard: card }))
      .catch(err => console.error(err))

    fetch('https://api.github.com/users/elijahdaniel/followers')
      .then(res => res.json())
      .then(data => this.setState({ followers: data }))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div className='container'>
        <CardMain my={this.state.myCard} />
        {console.log(this.state.myCard)}
        <Divider horizontal>Followers</Divider>
        <Card char={this.state.followers} />
      </div>
    )
  }
}
