import React from "react"
import styled from "styled-components"
import colors from "../globals/colors"
import MediaQueries from "../Utils/mediaQueries"

const FooterContainer = styled.div`
width: 100%;
height: 120px;
overflow-x: hidden;
background-color: ${colors.baseColor};

max-width: 1220px;
margin: 0 auto; //Center the container

display: flex;
align-items: center;
justify-content: center;
`

const TextContainer = styled.div`
`

const Text = styled.p`
margin: 0px;

${MediaQueries.queries.tablet`
margin: 0px 30px 0px 30px;
`}
`

const NoBreakLineSpan = styled.span`
white-space:nowrap;
display: inline-block;
`

function Footer() {
    return (
        <FooterContainer>         
            <TextContainer>    
                <Text>
                <NoBreakLineSpan>Sito creato da <mark> Alex Pagnotta  | </mark> </NoBreakLineSpan> 
                <NoBreakLineSpan>Sviluppato con <mark> Gatsby </mark>  | </NoBreakLineSpan>
                <NoBreakLineSpan>Hosting <mark> Netlify </mark></NoBreakLineSpan>
                </Text>
            </TextContainer>         
        </FooterContainer>
    )
  }
  export default Footer