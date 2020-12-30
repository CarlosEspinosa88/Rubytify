import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import { Wrapper } from "../styles";
import { SongList } from "../../components/SongList";
// import { useArtists } from '../../utils/hooks/useArtists'
import { useFilterSearch } from '../../utils/hooks/useFilterSearch';
import { SearchBar } from "../../components/SearchBar"
import { API_URL } from '../../services/settings'

function Songs(props) {
  const { albumId, albumName, artistName } = props.match.params;
  const [ validate, setLoading ] = useState({ loading: true });
  const SONGS_URL = `${API_URL}/albums/${albumId}/songs`;

  const [handleSearch, filterArtist, searchInput, values] = useFilterSearch(SONGS_URL);

  if (validate.loading) {
    setTimeout(() => {
      setLoading((prevValues) => ({ ...prevValues, loading: false }) )
    }, 5000)
  }

  return (
    <Layout>
      <Wrapper>
        <SearchBar
          search={values}
          placeholder="Canciones"
          searchInput={searchInput}
          handleSearch={handleSearch}
        />
        <SongList 
          songs={filterArtist}
          albumName={albumName}
          artistName={artistName}
          loading={validate.loading}
        />
      </Wrapper>
    </Layout>
  )
}

export default Songs;
