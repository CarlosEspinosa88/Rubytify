import React from "react";
import "../styles/grid.css";

export function SongList(props) {
	const { songs } = props
	if (songs === undefined || songs.length === 0 || songs === []) {
		return <h1>No hay canciones</h1>
	}

	return (
		<>
			<h1 style={{color: "#d1d1d1", padding: "0px 42px"}}>Lista de Canciones</h1>
			<div className="grid-container-song">
				{songs.map(song => (
					<>
						{song.preview_url === null ? (
							<p style= {{color: '#fff'}}>No hay preview de canción</p>
						) : (
							<>
								<div className="wrapper" data-anim="base wrapper">
									<div className="circle" data-anim="base left"></div>
									<div className="circle" data-anim="base right"></div>
								</div>
								<div>
									<a className="item-song" href={song.preview_url} key={song.preview_url}> {song.name}</a>
								</div>
							</>
						)}
					</>
				))}
			</div>
		</>
	)
}
