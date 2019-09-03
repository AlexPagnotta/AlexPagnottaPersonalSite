import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import NavMenuMobile from "../components/navMenuMobile"

class Index extends React.Component  {

  constructor() {
    super();
    //this.showMenu = this.showMenu.bind(this);
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
        <h1>Test</h1>
        <h2>Test</h2>
        <h3>Test</h3>   
      </Layout>
    );
   }

}
export default Index
