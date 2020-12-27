import React from 'react'
import { Grid, Left, Contain, Footer } from "./styles";

export function Layout(children) {
  return (
    <Grid>
      <Left>
        <p>adsdsa</p>
      </Left>
      <Contain >
        {children}
      </Contain>
      <Footer>
        <p>adsdsa</p>
      </Footer>
    </Grid>
  )
}