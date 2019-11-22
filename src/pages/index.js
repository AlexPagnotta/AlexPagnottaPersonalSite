import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import NavMenuMobile from "../components/navMenuMobile"
import Homepage from "../components/homepage";
import ProjectsPage from "../components/projectspage";
import BlogPostsPage from "../components/blog-posts-page";
import AboutPage from "../components/aboutpage";
import Footer from "../components/footer";
import styled from "styled-components"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Waypoint } from 'react-waypoint';

class Index extends React.Component  {

  constructor() {
    super();
    this.navbar = React.createRef();
    this.state = {
      menuVisible: false,
      sectionActive: 1
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

    if(index== 1){
    scrollTo('#homepage-section')
      
    }
    else if(index == 2){
      scrollTo('#projectspage-section')

    }
    else if(index == 3){
      scrollTo('#blogposts-section')   
    }
    else if(index == 4){
      scrollTo('#aboutpage-section')   
    }

    if(isMobile){
      this.navbar.current.menuIconClick();
    }
  }

  sectionScrollCallback(sectionIndex){
    //Callback event on section scrolled
    this.setState({ sectionActive: sectionIndex });
  }

  moveSectionDown(index) {
    scrollTo('#projectspage-section')
  }
 
  render(){
    return(
    <Layout>     
      <NavMenuMobile goToSection={this.goToSection.bind(this)} sectionActive={this.state.sectionActive} menuVisible={this.state.menuVisible}></NavMenuMobile>
      <Navbar ref={this.navbar} goToSection={this.goToSection.bind(this)} sectionActive={this.state.sectionActive}  toggleOverlayMenu={this.toggleOverlayMenu.bind(this)} resetOverlayMenu={this.resetOverlayMenu.bind(this)}></Navbar> {/*Pass methods to children components*/}         
      <Homepage moveSectionDown={this.moveSectionDown.bind(this)}></Homepage>   
      <Waypoint onEnter= {() => this.sectionScrollCallback(1) }></Waypoint>                  
      <ProjectsPage></ProjectsPage>
      <Waypoint onEnter= {() => this.sectionScrollCallback(2) }></Waypoint>            
      <BlogPostsPage></BlogPostsPage>    
      <Waypoint onEnter= {() => this.sectionScrollCallback(3) }></Waypoint>       
      <AboutPage></AboutPage> 
      <Waypoint onEnter= {() => this.sectionScrollCallback(4) }></Waypoint>                        
      <Footer></Footer> 
    </Layout>  
    );
   }
}
export default Index
