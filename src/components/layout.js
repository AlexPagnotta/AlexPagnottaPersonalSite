import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'
import colors from "../globals/colors"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${colors.baseColor};
  }

  mark{
    background-color: ${colors.accentColor};
    color: ${colors.primaryColor};
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
