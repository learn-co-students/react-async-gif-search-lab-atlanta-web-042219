import React from 'react'

export default class GifSearch extends React.Component {

	render() {
		return (
			<div>
				<form onSubmit={(e)=>{
					e.preventDefault()
					this.props.search(e.target.searchInput.value)
					e.target.reset()
				}}>
					<input name='searchInput' placeholder=" Search term" type="text" />
					<button type="submit">Search!</button>
				</form>
			</div>
		)
	}
}