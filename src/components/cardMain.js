import React, { Component } from 'react'

export default class CardMain extends Component {
  render() {
    return (
      <div className='mainCard'>
        <section className='main-left'>
          <h3 className='username'>{this.props.my.login}</h3>
          <img src={this.props.my.avatar_url} alt={this.props.my.login} />
        </section>
        <section className='main-right'>
          <span>{this.props.my.bio}</span>
          <span>{this.props.my.location}</span>
          <section className='links'>
            <a href={this.props.my.html_url}>GitHub</a>
            <a href={this.props.my.repos_url}>
              {this.props.my.public_repos} Repos
            </a>
          </section>
        </section>
      </div>
    )
  }
}
