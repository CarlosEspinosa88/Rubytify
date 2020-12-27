import React from 'react';
import { Link } from "react-router-dom";
import "../styles/grid.css";

export function AlbumList(props) {
	const { albums } = props;

	if (albums === undefined || albums.length === 0 || albums === []) {
		return <h1>No hay albumnes</h1>
	}

	return (
		<>
			<h1 style={{color: "#d1d1d1", padding: "0px 42px"}}>Lista de Albumnes</h1>
			<div className="grid-container">
				{albums.map(album => {
					return (
						<div key={album.id} className="images" style={{backgroundImage: `url(${album.image})`}}>
							<Link to={`/albums/${album.id}/songs`} id={album.id}>{album.name}</Link>
						</div>
					)
				})}
			</div>
		</>
	)
}
