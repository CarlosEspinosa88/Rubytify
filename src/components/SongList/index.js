import React from "react";
import "../styles/grid.css";

export function SongList(props) {
	const { songs, albumName, artistName, loading } = props;

	return (
		<div>
			<h1 className="title">{albumName}</h1>
			{loading ? (
				<div className="loading-data">
					<p className="not-preview" >Loading Songs...</p>
				</div>
			) : (
				<div className="grid-container-song">
					{songs.map(song => ( 
						<>
							{song.preview_url === null ? (
								<p className="not-preview">No hay preview de canción</p>
							) : (
								<>
									<div className="item-song" key={song.preview_url}>
										<a href={song.preview_url}>{song.name}</a>
										<div className="grid-list-song">
											<p className="artist">{artistName}</p>
											<p className="album">{albumName}</p>
										</div>
									</div>
								</>
							)}
						</>
					))}
				</div>
			)}
		</div>
	)
}
