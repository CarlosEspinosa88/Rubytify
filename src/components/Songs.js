import React, { Component} from "react";
import SongsList from "../components/SongsList"

class Songs extends Component {
 
  state = {
    loading: false,
    error: null,
    data: undefined
  }

  componentDidMount() {
    this.obtenerCanciones()
  }

  async obtenerCanciones() {
    this.setState({ loading: true })

    try {
      const data = await fetch(`https://rubytify.herokuapp.com/api/v1/albums/1/songs`)
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