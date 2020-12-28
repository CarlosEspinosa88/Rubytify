import React, { useState } from 'react';
import { Layout } from "../../components/Layout";
import { Wrapper } from "../styles";
import { AlbumList } from '../../components/AlbumList';
import { useArtists } from '../../utils/hooks/useArtists'
import { API_URL } from '../../services/settings'

function Albums(props) {
  const { artistId, artistName } = props.match.params;
	const [values, setValues] = useState({ loading: true })

  const albums = useArtists(`${API_URL}/artists/${artistId}/albums`);
  
  if (values.loading) {
    setTimeout(() => {
      setValues((prevValues) => ({ ...prevValues, loading: false }) )
    }, 5000)
    return <h1>Loading...</h1>
  }

	return (
    <Layout>
      <Wrapper>
        <AlbumList albums={albums} artistName={artistName} />
      </Wrapper>
    </Layout>
	)
}

export default Albums;