import React from "react"
import Img from "../components/image"
import styled from "styled-components"

const Container = styled.nav`
height: 220px; 
display: flex;
justify-content: space-between;
align-items: center;
padding: 30px;`

const Logo = styled.div`
width: 90px;
height: 70px;
background-color: white;`

const MenuItems = styled.ul`
list-style-type: none;
display: flex;
flex-direction: row;
justify-content: flex-end;
margin: 0px;`

const MenuItem = styled.ul`
margin-left: 30px;`

export default () => (
  <Container>
    <Logo>
      <Img></Img>
    </Logo>
    <MenuItems>
      <MenuItem>Home</MenuItem>
      <MenuItem>Progetti</MenuItem>
      <MenuItem>Chi Sono</MenuItem>
      <MenuItem>Visita il mio Blog</MenuItem>
    </MenuItems>
  </Container>
)
