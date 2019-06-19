import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./styles/grid.css"; 

class AlbumList extends Component {
	render() {

		if (this.props.albums === undefined ) {
			return <h1>No hay albumnes</h1>
		}

		return (
			<div className="grid-container-albums">
				{this.props.albums.map(albums => {
					return (
						<React.Fragment>
							<Link to={`/albums/${albums.id}/songs`} >
								<div className="images-albums" style={{backgroundImage: `url(${albums.image})`}} key={albums.image} ></div>
								<div className='album-name'>{albums.name}</div>
							</Link>
						
						</React.Fragment>
					)
				})}
			</div>
  	)
	}
}

export default AlbumList;
