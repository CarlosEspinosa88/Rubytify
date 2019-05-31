import React from "react"
import "./styles/grid.css" 

class ArtistsSongs extends React.Component {
	render() {

		if (this.props.songs === undefined) {
			return <h1>No hay canciones</h1>
		}

		return (
			<div>
				{this.props.songs.map(songs => {
					return(
						<React.Fragment>
							<div>
								<div key={songs.name} >{songs.image}</div>
								<a style={{ color: '#fff'}} href={`${songs.preview_url}`} key={songs.preview_url}>{songs.name}</a>
							</div>
							
						</React.Fragment>
					);
				})}
			</div>
		)
	}
}

export default ArtistsSongs;
