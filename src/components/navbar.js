import React from "react"
import "./navbar.css"
import Img from "../components/image"

export default () => (
  <nav class="navbar-container">
    <div class="logo">
      <Img></Img>
    </div>
    <ul class="navbar-items">
        <li>Home</li>
        <li>Progetti</li>
        <li>Chi Sono</li>
        <li>Visita il mio Blog</li>
      </ul>
  </nav>
)
