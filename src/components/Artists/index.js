import React, { useState } from "react";
import { ArtistList } from "../ArtistList";
import { Wrapper } from "./styles";
import {useArtists} from '../../hooks/useArtists'

const API = 'https://rubytify.herokuapp.com/api/v1';

function Artists()  {
  const [values, setValues] = useState({loading: true})
  const artists = useArtists(API)

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
