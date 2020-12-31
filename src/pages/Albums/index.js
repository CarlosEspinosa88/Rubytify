import React, { useState } from 'react';
import { Layout } from "../../components/Layout";
import { Wrapper } from "../styles";
import { AlbumList } from '../../components/AlbumList';
import { useFilterSearch } from '../../utils/hooks/useFilterSearch';
import { SearchBar } from "../../components/SearchBar";
import { API_URL } from '../../services/settings';

function Albums(props) {
  const { artistId, artistName } = props.match.params;
	const [ validate, setLoading ] = useState({ loading: true });
  const ALBUMS_URL = `${API_URL}/artists/${artistId}/albums`;

  const [handleSearch, filterArtist, searchInput, values] = useFilterSearch(ALBUMS_URL);
  
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
          placeholder="Albumnes"
          searchInput={searchInput}
          handleSearch={handleSearch}
        />
        <AlbumList 
          albums={filterArtist}
          artistName={artistName} 
          loading={validate.loading}
        />
      </Wrapper>
    </Layout>
	)
}

export default Albums;
