import React from "react"
import "./styles/grid.css" 

class ArtistList extends React.Component {
	render() {
		if (this.props.artists === undefined) {
			return <h1>No hay artistas</h1>
		}

		return (
			<div className="grid-container">
				{this.props.artists.map(artist => {
					return(
						<React.Fragment>
							<div className="images" style={{backgroundImage: `url(${artist.image})`}} key={artist.image} >
								<button onClick={function() { alert('click'); }} >{artist.name}</button>
							</div>
						</React.Fragment>
					);
				})}
			</div>
		)
	}
}

export default ArtistList;
