import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import { Wrapper } from "../styles";
import { ArtistList } from "../../components/ArtistList";
import { useArtists } from '../../utils/hooks/useArtists';
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
    <Layout>
      <Wrapper>
        <ArtistList artists={artists} />
      </Wrapper>
    </Layout>
  )
}

export default Artists;