import React, { Component} from "react";
import ArtistsList from "../components/ArtiststList"

class Artists extends Component {
 
  state = {
    loading: false,
    error: null,
    data: undefined
  }

  componentDidMount() {
    this.obtenerArtistas()
  }
 
  obtenerArtistas = async () => {
    this.setState({ loading: true })

    try {
      const data = await fetch('https://rubytify.herokuapp.com/api/v1')
      const artists = await data.json()
      this.setState({ loading: false, error: null, data: artists })
    } catch (error) {
      this.setState({ error: error.message, loading: false })
    }
  }

  render() {
    if (this.state.loading == true) {
      return <h1>Cargando...</h1>
    }

    if (this.state.error) {
      return <h1>{this.state.error}</h1>
    }

    return(
      <div>
        <ArtistsList artists={this.state.data} />
      </div>
    )
  }
}

export default Artists;