import React from "react"
import styled from "styled-components"
import colors from "../globals/colors"
import MediaQueries from "../utils/mediaQueries"
import curriculumFile from '../assets/curriculum.pdf' 

const AboutSectionContainer =  styled.div`
width: 100%;

//Fix scroll to with navbar
padding-top: 140px;
margin-top: -140px;

${MediaQueries.queries.tablet`

//Fix scroll to with navbar
padding-top: 100px;
margin-top: -100px;

`}
`

const AboutBackContainer =  styled.div`
background-color: ${colors.accentColor};
width: 100%;
`

const AboutContainer = styled.div`
width: 100%;
overflow-x: hidden;

max-width: 1220px;
margin: 0 auto; //Center the container


/* Grid */
display: grid;
align-items: flex-start;
grid-template-columns: repeat(2, 1fr);

${MediaQueries.queries.tablet`
grid-template-columns: repeat(1, 1fr);
`}

`

const ChiSonoColumn = styled.div`
padding: 30px;
height: 100%;
padding: 90px 30px 30px 30px;

display: flex;
align-items: center;
`

const LinksColumn = styled.div`
padding: 30px;
height: 100%;
padding: 90px 30px 30px 30px;
display: flex;
flex-direction: column;

${MediaQueries.queries.tablet`
padding: 30px 30px 30px 30px;
`}
`

const TextContainer = styled.div`
`

const LinksContainer = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
height: 100%;
padding: 30px 0px 30px 0px;
`

const ScrollLinkText = styled.h4`
text-decoration: underline;
cursor: pointer;
`

const NoBreakLineSpan = styled.span`
white-space:nowrap;
`

function AboutPage() {
    return (
        <AboutSectionContainer>         
            <AboutBackContainer>         
                <AboutContainer>
                    <ChiSonoColumn> 
                        <TextContainer>
                            <h2>Chi Sono?</h2>      
                            <p>
                            Come già detto, sono Alex Pagnotta, ho 21 anni, e sin da piccolo ho sempre avuto una grande passione per tutto quello che riguarda l'informatica e la programmazione, passione che da 2 anni é diventata il mio lavoro.<br/><br/>
                            Qua sotto trovi i link ai miei profili LinkedIn, Instagram e alla mia email, alex.pagnotta@outlook.it, per contattarmi.<br/><br/>
                            Sempre in questa pagina puoi inoltre consultare il mio curriculum, in versione parziale qua sul sito, o completa scaricandolo in PDF.<br/><br/>
                            </p> 
                        </TextContainer> 
                    </ChiSonoColumn>
                    <LinksColumn>       
                        <h2>Link Utili</h2>              
                        <LinksContainer>        
                            <ScrollLinkText >
                                <a href='https://www.linkedin.com/in/alex-pagnotta/'>Linkedin</a>
                            </ScrollLinkText> 
                            <ScrollLinkText>
                                <a href='https://github.com/AlexPagnotta'>Github</a>                       
                            </ScrollLinkText> 
                            <ScrollLinkText>
                                <a href='https://www.behance.net/alexpagnotta'>Behance</a>                                                        
                            </ScrollLinkText> 
                            <ScrollLinkText>
                                <a href='mailto:alex.pagnotta@outlook.it'>Mandami un Email</a>                                   
                            </ScrollLinkText> 
                            <ScrollLinkText>
                                <a href={curriculumFile} download>Scarica il mio curriculum completo</a>                                
                            </ScrollLinkText> 
                        </LinksContainer>                     
                    </LinksColumn>    
                </AboutContainer>
            </AboutBackContainer>
        </AboutSectionContainer>
    )
  }
  export default AboutPage