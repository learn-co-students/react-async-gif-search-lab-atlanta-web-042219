import React, { Component } from 'react'

export default class GifList extends Component {
  displayGifs = () => {
    console.log(this.props.gifs);
    if (this.props.gifs) {
      return this.props.gifs.map(gif => {
        // return <div key={gif.key}> {gif.bitly_url}</div>
        return <div key={gif.id}><img src={gif.images.original.url} alt={gif.title} /></div>
      })
    }
  }
  render() {
    return (
      <div>
        {this.displayGifs()}
      </div>
    )
  }
}


// import React from 'react'

// export default function GifList(props) {

//   const displayGifs = () => {
//     if (props.gifs) {
//       props.gifs.map(gif => {
//         return <img src={gif.url} key={gif.id} />
//       })
//     }
//   }

//   return (
//     <div>
//       {displayGifs()}
//     </div>
//   )
// }
