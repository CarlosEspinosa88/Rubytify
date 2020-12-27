import React, { useState } from "react";
import { Wrapper } from "../styles";
import { SongList } from "../../components/SongList";
import { useArtists } from '../../utils/hooks/useArtists'
import { API_URL } from '../../services/settings'

function Songs(props) {
  const id = props.match.params.albumsId;
  const [values, setValues] = useState({
    loading: true,
  });
  
  const songs = useArtists(`${API_URL}/albums/${id}/songs`)

  if (values.loading) {
    setTimeout(() => {
      setValues((prevValues) => ({ ...prevValues, loading: false }) )
    }, 5000)
    return <h1>Loading...</h1>
  }

  return(
    <Wrapper>
      <SongList songs={songs} />
    </Wrapper>
  )
}

export default Songs;
