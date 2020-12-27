import React from 'react';
import Artists from "./pages/Artists"
import Albums from './pages/Albums';
import Songs from './pages/Songs';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalStyle } from './styles/GlobalStyle'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div>
        <Route exact path="/" component={Artists} />
        <Route exact path="/:artistId/albums" component={Albums} />
        <Route exact path="/albums/:albumsId/songs" component={Songs} />
		  </div>
    </Router>
  )
}

export default App;
