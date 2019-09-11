import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'
import colors from "../globals/colors"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  mark{
    background-color: ${colors.accentColor};
  }
`

const Container = styled.div`
margin: 0 auto;
max-width: 1220px;
`

export default ({ children }) => (
  <Container>
    <GlobalStyle/>  
    {children}
  </Container>
)
