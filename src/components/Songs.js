import React, { Component} from "react";
import SongsList from "../components/SongsList";

class Songs extends Component {
 
  state = {
    loading: false,
    error: null,
    data: undefined,
    id: 1,
  }

  componentDidMount() {
    this.obtenerCanciones()
  }

  obtenerCanciones = async () =>  {
    this.setState({ loading: true })
		var id = this.state.id

		if (this.props.match.params.albumsId) {
			id = parseInt(this.props.match.params.albumsId)
		} 

    try {
      const data = await fetch(`https://rubytify.herokuapp.com/api/v1/albums/${id}/songs`)
      const songs = await data.json()
      this.setState({ loading: false, error: null, data: songs.data })
    } catch (error) {
      this.setState({ error: error.message, loading: false })
    }
  }

  render() {
    if (this.state.loading === true) {
      return <h1>Cargando...</h1>
    }

    if (this.state.error) {
      return <h1>{this.state.error}</h1>
    }

    return(
      <div>
        <SongsList songs={this.state.data} />
      </div>
    )
  }
}

export default Songs;