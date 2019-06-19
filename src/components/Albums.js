import React from 'react';
import AlbumList from '../components/AlbumList'

class Albums extends React.Component {
	state = {
		loading: false, 
		error: null, 
		data: undefined, 
		id: 1}

	componentDidMount() {
		this.obtenerAlbumnes()
	}

	obtenerAlbumnes = async () => {
		this.setState({ loading: true})
		var id = this.state.id

		if (this.props.match.params.artistId) {
			id = parseInt(this.props.match.params.artistId)
		} 

		try { 
			const data = await fetch(`https://rubytify.herokuapp.com/api/v1/artists/${id}/albums`)
			const albums = await data.json()
			this.setState({ loading: false, error: null, data: albums.data})
		} catch (error) {
			 this.setState({ error: error.messages, loading: false })
		}
	}

	render () {
		if( this.state.loading === true) {
			return <h2>Cargando...</h2>
		}

		if( this.state.error ) {
			return <h2>{this.state.error}</h2>
		}

		return (
			<div>
				<AlbumList albums={this.state.data} />
			</div>
		)
	}
}

export default Albums;