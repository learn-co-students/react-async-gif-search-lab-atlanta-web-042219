import React, { Component } from 'react'

import GifSearch from './GifSearch'
import GifList from './GifList'

export default class GifListContainer extends Component {
  state = {
    gifs: ''
  }

  fetchGifs = (search) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(data => this.setState({ gifs: data.data }))
  }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
