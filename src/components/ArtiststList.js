import React from "react"

class ArtistList extends React.Component {
	render() {
		if (this.props.artists == undefined) {
			return <h1>No hay artistas</h1>
		}

		return (
			<div>
				{this.props.artists.map(artist => {
					return(
						<div>{artist.name}</div>
					);
				})}
			</div>
		)
	}
}

export default ArtistList;
