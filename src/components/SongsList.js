import React from "react";
import "./styles/grid.css"; 
// import "./styles/circle-play.css"; 

class ArtistsSongs extends React.Component {
	render() {

		if (this.props.songs === undefined) {
			return <h1>No hay canciones</h1>
		}

		return (
			<div className="grid-container-song">
				{this.props.songs.map(songs => {

					if (songs.preview_url === null) {
						return <p style= {{color: '#fff'}}>No hay preview de canción</p>
					}

					return(
						<React.Fragment>
							<div className="wrapper" data-anim="base wrapper">
								<div className="circle" data-anim="base left"></div>
								<div className="circle" data-anim="base right"></div>
							</div>
							<div>
								<a className="item-song" href={songs.preview_url} key={songs.preview_url} target="_blank"> {songs.name}</a>
							</div>
							
						</React.Fragment>
					);
				})}
			</div>
		)
	}
}

export default ArtistsSongs;
