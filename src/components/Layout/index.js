import React from 'react';
import { Grid, Left, Contain, Footer } from "./styles";

export function Layout({ children }) {
  return (
    <Grid>
      <Left>
        <p>Menu Lateral</p>
      </Left>
      <Contain >
        {children}
      </Contain>
      <Footer>
        <p>Menu Footer</p>
      </Footer>
    </Grid>
  )
}