import React from 'react';
import { Link } from "react-router-dom";
import "../styles/grid.css";

export function AlbumList(props) {
  const { albums, artistName, loading } = props;
  
  return (
    <div className="container-list">
      <h1 className="title">{artistName}</h1>
      {loading ? (
        <div className="loading-data">
          <p className="not-preview" >Loading Albums...</p>
        </div>
      ) : (
        <div className="grid-container">
          {albums.map(album => {
            return (
              <div key={album.id} className="images" style={{backgroundImage: `url(${album.image})`}}>
                <Link 
                  id={album.id}
                  name={album.name}
                  image={album.image}
                  to={`/albums/${album.id}/${album.name}/${artistName}/songs`}
                >
                  {album.name}
                </Link>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
