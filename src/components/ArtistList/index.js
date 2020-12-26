import React from "react";
import { Link } from "react-router-dom";
import "../styles/grid.css"; 

export function ArtistList(props) {
	const { artists } = props
	if (artists === undefined || artists === []) {
		return <h1>No hay artistas</h1>
	}

	return (
		<div className="grid-container">
			{artists.map(artist => {
				return (
					<div key={artist.id}>
						<div className="images" style={{backgroundImage: `url(${artist.image})`}}>
							<Link to={`${artist.id}/albums`} id={artist.id} >{artist.name}</Link>
						</div>
					</div>
				);
			})}
		</div>
	)
}

