import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import NavMenuMobile from "../components/navMenuMobile"

class Index extends React.Component  {

  constructor() {
    super();
    this.showMenu = this.showMenu.bind(this);
    this.state = {
      menuVisible: false,
    };
  }

  showMenu(){
    this.setState({ menuVisible: !this.state.menuVisible });
  }

  render(){
    return(
      <Layout>  
        {this.state.menuVisible && <NavMenuMobile></NavMenuMobile>}
        <Navbar showMenu={this.showMenu}></Navbar>
        <h1>Test</h1>
        <h2>Test</h2>
        <h3>Test</h3>   
      </Layout>
    );
   }

}
export default Index
