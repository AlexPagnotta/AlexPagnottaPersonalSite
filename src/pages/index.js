import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import NavMenuMobile from "../components/navMenuMobile"
import Homepage from "../components/homepage";
import ProjectsPage from "../components/projectspage";
import AboutPage from "../components/aboutpage";
import ReactFullpage from '@fullpage/react-fullpage';
import styled from "styled-components"

class Index extends React.Component  {

  constructor() {
    super();
    this.navbar = React.createRef();
    this.state = {
      menuVisible: false,
      sectionActive: 0
    };
  }

  //Toggle the overlay menu
  toggleOverlayMenu(){
    this.setState({ menuVisible: !this.state.menuVisible });
  }

  //Hide the overlay menu on responsive changes
  resetOverlayMenu(){
    this.setState({ menuVisible: false });
  }


  goToSection(index, isMobile) {
    //TODO
    /*window.fullpage_api.moveTo(index, 0);
    if(isMobile){
      this.navbar.current.menuIconClick();
    }*/
  }

  moveSectionDown(index) {
    //TODO
    //window.fullpage_api.moveSectionDown();
  }
 
  render(){
    return(
    <Layout>     
      <NavMenuMobile goToSection={this.goToSection.bind(this)} sectionActive={this.state.sectionActive} menuVisible={this.state.menuVisible}></NavMenuMobile>
      <Navbar ref={this.navbar} goToSection={this.goToSection.bind(this)} sectionActive={this.state.sectionActive}  toggleOverlayMenu={this.toggleOverlayMenu.bind(this)} resetOverlayMenu={this.resetOverlayMenu.bind(this)}></Navbar> {/*Pass methods to children components*/}         
      <Homepage moveSectionDown={this.moveSectionDown.bind(this)}></Homepage>      
      <ProjectsPage></ProjectsPage> 
    </Layout>  
    );
   }
}
export default Index
