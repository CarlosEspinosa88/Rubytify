import React from "react";
import { Link } from "react-router-dom";
import "../styles/grid.css"; 

export function ArtistList(props) {
	const { artists, loading } = props;
	
	return (
		<div>
			<h1 className="title">Rubytify</h1>
			{loading ? (
				<div className="loading-data">
					<p className="not-preview" >Loading Artists...</p>
				</div>
			) : (
				<div className="grid-container">
					{artists.map(artist => {
						return (
							<div key={artist.id} className="images" style={{backgroundImage: loading ? "red" : `url(${artist.image})`}}>
								<Link to={`${artist.id}/${artist.name}/albums`} id={artist.id} name={artist.name}>{artist.name}</Link>
							</div>
						);
					})}
				</div>
			)}
		</div>
	)
}

