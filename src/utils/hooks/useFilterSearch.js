import { useState, useCallback, useMemo, useRef } from "react";
import { useArtists } from "./useArtists" 

export const useFilterSearch = function(url) {
  const artists = useArtists(url);
  const [ values, setValues ] = useState({ search: '' });
  const searchInput = useRef(null);

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

  return [handleSearch, filterArtist, searchInput, values]
}