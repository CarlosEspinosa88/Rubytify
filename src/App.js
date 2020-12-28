import React from 'react';
import Artists from "./pages/Artists"
import Albums from './pages/Albums';
import Songs from './pages/Songs';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from './styles/GlobalStyle'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div>
        <Switch> 
          <Route exact path="/" component={Artists} />
          <Route exact path="/:artistId/:artistName/albums" component={Albums} />
          <Route exact path="/albums/:albumId/:albumName/:artistName/songs" component={Songs} />
        </Switch>
		  </div>
    </Router>
  )
}

export default App;
