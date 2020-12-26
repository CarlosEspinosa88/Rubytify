import React from 'react'
import { Home } from '../Pages/Home'
import { Grid, Left, Contain, Footer } from "./styles"

export function Layout(children) {
  return (
    <Grid>
      <Left>
        <p>adsdsa</p>
      </Left>
      <Contain >
        {children && <Home />}
      </Contain>
      <Footer>
        <p>adsdsa</p>
      </Footer>
    </Grid>
  )
}