import React from "react"
import styled from "styled-components"
import colors from "../globals/colors"


const HomepageContainer = styled.div`
color: ${colors.primaryColor};
padding: 30px;
/* Grid styles */
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`

function Homepage() {
    return (
        <HomepageContainer>
            <h1>Ciao, sono Alex Pagnotta |</h1>         
            <p>
            <mark> Ho 21 anni, </mark> vivo in Umbria, e da 2 anni lavoro come <mark> sviluppatore </mark>, principalmente in <mark> c# </mark>, sia in ambiente WinForm che MVC Asp.Net.
            Ho inoltre sviluppato alcune <mark> app Android </mark> nel tempo libero, oltre ad aver sempre avuto una passione per quello che riguarda la <mark> grafica e il design. </mark>
            </p>      
        </HomepageContainer>
    )
  }
  export default Homepage