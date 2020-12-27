import React, { useState } from "react";
import { ArtistList } from "../../components/ArtistList";
import { Wrapper } from "../styles";
import { useArtists } from '../../utils/hooks/useArtists'
import { API_URL } from '../../services/settings';

function Artists()  {
  const [values, setValues] = useState({loading: true})
  const artists = useArtists(API_URL)

  if (values.loading) {
    setTimeout(() => {
      setValues((prevValues) => ({ ...prevValues, loading: false }) )
    }, 5000)
    return <h1>Loading...</h1>
  }

  return(
    <Wrapper>
      <ArtistList artists={artists} />
    </Wrapper>
  )
}

export default Artists;