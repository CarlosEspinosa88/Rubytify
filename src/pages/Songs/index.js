import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import { Wrapper } from "../styles";
import { SongList } from "../../components/SongList";
import { useArtists } from '../../utils/hooks/useArtists'
import { API_URL } from '../../services/settings'

function Songs(props) {
  const { albumId, albumName, artistName } = props.match.params;
  const [ values, setValues] = useState({ loading: true });
  const songs = useArtists(`${API_URL}/albums/${albumId}/songs`);

  if (values.loading) {
    setTimeout(() => {
      setValues((prevValues) => ({ ...prevValues, loading: false }) )
    }, 5000)
  }

  return (
    <Layout>
      <Wrapper>
        <SongList 
          songs={songs}
          albumName={albumName}
          artistName={artistName}
          loading={values.loading}
        />
      </Wrapper>
    </Layout>
  )
}

export default Songs;
