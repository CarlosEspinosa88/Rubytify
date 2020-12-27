import { useState, useEffect } from 'react';

export const useArtists = function(url) {
  const [ artist, setArtist ] = useState([]);

  useEffect(() => {
    async function getArtists() {
      try {
        const data = await fetch(url)
        const allArtists = await data.json()
        setArtist(allArtists.data)

      } catch (error) {
        console.log(error)
      }
    }

    getArtists()
  }, [url])

  return artist
}
