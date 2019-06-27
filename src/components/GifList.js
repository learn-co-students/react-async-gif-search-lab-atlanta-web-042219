import React from 'react'

export default class GifList extends React.Component {

	genImg = (gif)=> <img key={gif.id} src={gif.images.original.url} alt={gif.slug} />

	render() {
		console.log(this.props)
		return (
			<div id="GifList">
				{this.props.gifs.map(gif => this.genImg(gif))}
			</div>
		)
	}
}