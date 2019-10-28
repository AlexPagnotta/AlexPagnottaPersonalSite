import React from "react"
import styled from "styled-components"
import colors from "../globals/colors"
import MediaQueries from "../Utils/mediaQueries"

const HomepageContainer = styled.div`
padding-top: 220px;
width: 100%;
height: 100vh;

/* Grid */
display: grid;
align-items: flex-start;
grid-template-columns: repeat(auto-fit, minmax(384px, 1fr));

${MediaQueries.queries.tablet`
padding-top: 150px; 
`}
`
const TextColummn = styled.div`
padding: 30px;
height: 100%;

display: flex;
align-items: center;

${MediaQueries.queries.tablet`
align-items: flex-start;
`}
`

const TextContainer = styled.div`
`

const ContentColumn = styled.div`
width: 100%;
height: 100%;

${MediaQueries.queries.tablet`
display: flex;
align-items: flex-end;
`}

`

const ProfileImage = styled.div`
background-color: ${colors.accentColor};
width: 100%;
height: 100%;

${MediaQueries.queries.tablet`
display: none;
`}
`

const BottomBackground = styled.div`
width: 100%;
display: none;

&:before,
&:after,
& > div {
width: 100%;
height: 50px;
background-color: ${colors.accentColor};
content: '';
display: block;
}

&:before{
 opacity: 0.5;
}

& > div{
opacity: 0.7;
}

&:after{
opacity: 1;
}

${MediaQueries.queries.tablet`
display: block;
`}
`

const ScrollLinkText = styled.h4`
text-decoration: underline;
cursor: pointer;
`

const NoBreakLineSpan = styled.span`
white-space:nowrap;
`

function Homepage(props) {
    return (
        <HomepageContainer>
            <TextColummn>
                <TextContainer>
                    <h1>Ciao, sono <br/><NoBreakLineSpan>Alex Pagnotta |</NoBreakLineSpan></h1>         
                    <p>
                    <mark> Ho 21 anni </mark> , vivo in Umbria, e da 2 anni lavoro come <mark> sviluppatore </mark>, principalmente in <mark> c# </mark>, sia in ambiente WinForm che MVC Asp.Net.<br/>
                    Ho inoltre sviluppato alcune <mark> app Android </mark> nel tempo libero, oltre ad aver sempre avuto una passione per quello che riguarda la <mark> grafica e il design. </mark>
                    </p> 
                    <ScrollLinkText onClick={ () => props.moveSectionDown() } >
                    Scorri per visualizzare il resto del sito.
                    </ScrollLinkText>
                </TextContainer>
            </TextColummn>      
            <ContentColumn>
                <ProfileImage>    
                </ProfileImage>
                <BottomBackground>
                    <div></div>
                </BottomBackground>     
            </ContentColumn>   

        </HomepageContainer>
    )
  }
  export default Homepage