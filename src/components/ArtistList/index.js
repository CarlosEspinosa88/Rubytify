import React from "react";
import { Link } from "react-router-dom";
import "../styles/grid.css"; 

export function ArtistList(props) {
	const { artists } = props;

	if (artists === undefined || artists.length === 0 || artists === []) {
		return <h1>No hay artistas</h1>
	}

	return (
		<>
			<h1 className="title">Rubytify</h1>
			<div className="grid-container">
				{artists.map(artist => {
					return (
						<div key={artist.id} className="images" style={{backgroundImage: `url(${artist.image})`}}>
							<Link to={`${artist.id}/${artist.name}/albums`} id={artist.id} name={artist.name}>{artist.name}</Link>
						</div>
					);
				})}
			</div>
		</>
	)
}

