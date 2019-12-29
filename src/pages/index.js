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
import {Helmet} from "react-helmet";

class Index extends React.Component  {

  constructor() {
    super();
    this.navbar = React.createRef();
    this.state = {
      menuVisible: false
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

  moveSectionDown(index) {
    scrollTo('#projectspage-section')
  }
 
  render(){
    return(
    <Layout>    
      <Helmet>
        <meta charSet="utf-8" />
        <title>Alex Pagnotta</title>
        <link rel="canonical" href="http://alexpagnotta.me" />
      </Helmet> 
      <NavMenuMobile goToSection={this.goToSection.bind(this)} menuVisible={this.state.menuVisible}></NavMenuMobile>
      <Navbar ref={this.navbar} goToSection={this.goToSection.bind(this)} toggleOverlayMenu={this.toggleOverlayMenu.bind(this)} resetOverlayMenu={this.resetOverlayMenu.bind(this)}></Navbar> {/*Pass methods to children components*/}         
      
      <section id="homepage-section">
        <Homepage moveSectionDown={this.moveSectionDown.bind(this)}></Homepage>                                    
      </section>
      <section id="projectspage-section">
        <ProjectsPage></ProjectsPage>        
      </section>
      <section id="blogposts-section">   
        <BlogPostsPage></BlogPostsPage>   
      </section>
      <section id="aboutpage-section">                               
        <AboutPage></AboutPage> 
      </section>      
      <Footer></Footer> 
    </Layout>  
    );
   }
}
export default Index
