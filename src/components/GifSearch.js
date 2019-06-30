import React, { Component } from 'react'

export default class GifSearch extends Component {
  state = {
    search: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.fetchGifs(this.state.search)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Search: </label>
          <input type="text" name="search" onChange={e => this.setState({ search: e.target.value })}></input>
          <input type="submit" value="Search" />
        </form>
      </div >
    )
  }
}
