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
			<h1 style={{color: "#d1d1d1", padding: "0px 42px"}}>Lista de Artistas</h1>
			<div className="grid-container">
				{artists.map(artist => {
					return (
						<div key={artist.id} className="images" style={{backgroundImage: `url(${artist.image})`}}>
							<Link to={`${artist.id}/albums`} id={artist.id} >{artist.name}</Link>
						</div>
					);
				})}
			</div>
		</>
	)
}

