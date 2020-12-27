import React, { useState } from 'react';
import { Wrapper } from "../styles";
import { AlbumList } from '../../components/AlbumList';
import { useArtists } from '../../utils/hooks/useArtists'
import { API_URL } from '../../services/settings'

function Albums(props) {
  const id = props.match.params.artistId;
	const [values, setValues] = useState({ loading: true })

  const albums = useArtists(`${API_URL}/artists/${id}/albums`);
  
  if (values.loading) {
    setTimeout(() => {
      setValues((prevValues) => ({ ...prevValues, loading: false }) )
    }, 5000)
    return <h1>Loading...</h1>
  }

	return (
		<Wrapper>
			<AlbumList albums={albums} />
		</Wrapper>
	)
}

export default Albums;