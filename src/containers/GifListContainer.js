import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
	constructor(props){
		super(props)
		this.state = { gifs: [] }
	}

	search = (searchTerm)=>{
		fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
		.then(resp => resp.json())
		.then(resp => this.setState({ gifs: resp.data }))
	}

	render() {
		return (
			<div>
				<GifSearch search={this.search} />
				<GifList gifs={this.state.gifs} />
			</div>
		)
	}
}