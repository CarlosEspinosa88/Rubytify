import React, { useState, useRef, useCallback, useMemo } from "react";
import { Layout } from "../../components/Layout";
import { Wrapper } from "../styles";
import { ArtistList } from "../../components/ArtistList";
import { useArtists } from '../../utils/hooks/useArtists';
import { SearchBar } from "../../components/SearchBar"
import { API_URL } from '../../services/settings';

function Artists()  {
  const [ values, setValues ] = useState({ 
    loading: true,
    search: ''
  });

  const searchInput = useRef(null);
  const artists = useArtists(API_URL);

  const handleSearch = useCallback(() => {
    setValues((prevValues) => ({
      ...prevValues,
      search: searchInput.current.value
    }))
  }, [])

  const filterArtist = useMemo(() => 
    artists.filter((artist) => (
      artist.name.toLowerCase().includes(values.search.toLowerCase())
    )),
    [artists, values.search]
  )

  if (values.loading) {
    setTimeout(() => {
      setValues((prevValues) => ({ ...prevValues, loading: false }) )
    }, 5000)
  }

  return(
    <Layout>
      <Wrapper>
        <SearchBar 
          artists={artists}
          search={values.search}
          searchInput={searchInput}
          handleSearch={handleSearch}
        />
        <ArtistList 
          artists={filterArtist}
          loading={values.loading}
        />
      </Wrapper>
    </Layout>
  )
}

export default Artists;
