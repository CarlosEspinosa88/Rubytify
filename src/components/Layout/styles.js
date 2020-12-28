import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template: 685px minmax(80px,auto) 0px / minmax(0px,220px) 1fr;
  grid-template-areas: "left contain" "footer footer";
`

export const Head = styled.div`
  grid-area: head;
  background-color: #313131
`

export const Left = styled.div`
  grid-area: left;
  background-color: #515151
`

export const Contain = styled.div`
  grid-area: contain;
`

export const Footer = styled.div`
  grid-area: footer;
  background-color: #3D3D3D;
  z-index: 100;
`

export const Item = styled.div`
  padding: 10px;
`
