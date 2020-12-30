import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import { Wrapper } from "../styles";
import { ArtistList } from "../../components/ArtistList";
import { useFilterSearch } from '../../utils/hooks/useFilterSearch';
import { SearchBar } from "../../components/SearchBar"
import { API_URL } from '../../services/settings';

function Artists()  {
  const [ validate, setLoading ] = useState({ loading: true });
  const [handleSearch, filterArtist, searchInput, values] = useFilterSearch(API_URL);

  if (validate.loading) {
    setTimeout(() => {
      setLoading((prevValues) => ({ ...prevValues, loading: false }) )
    }, 5000)
  }

  return(
    <Layout>
      <Wrapper>
        <SearchBar 
          search={values}
          placeholder="Artistas"
          searchInput={searchInput}
          handleSearch={handleSearch}
        />
        <ArtistList 
          artists={filterArtist}
          loading={validate.loading}
        />
      </Wrapper>
    </Layout>
  )
}

export default Artists;
