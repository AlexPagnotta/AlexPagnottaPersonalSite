import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import NavMenuMobile from "../components/navMenuMobile"
import Homepage from "../components/homepage";
import ProjectsPage from "../components/projectspage";
import AboutPage from "../components/aboutpage";
import ReactFullpage from '@fullpage/react-fullpage';

class Index extends React.Component  {

  constructor() {
    super();
    this.state = {
      menuVisible: false,
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

  render(){
    return(
    <Layout>     
      <NavMenuMobile menuVisible={this.state.menuVisible}></NavMenuMobile>
      <Navbar toggleOverlayMenu={this.toggleOverlayMenu.bind(this)} resetOverlayMenu={this.resetOverlayMenu.bind(this)}></Navbar> {/*Pass methods to children components*/}         
      <ReactFullpage
          render={comp => (
            <ReactFullpage.Wrapper>
              <div className="section">
            <Homepage></Homepage>      
            </div>
            <div className="section">
            <ProjectsPage></ProjectsPage> 
            </div>
            <div className="section">
            <AboutPage></AboutPage>   
            </div>
            </ReactFullpage.Wrapper>
          )}/>
      </Layout>  
    );
   }

}
export default Index
