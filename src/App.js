import React, { Component, } from 'react';
import Profile from './Profile/Profile';

export class App extends Component {
  state = {
    isShow: false
  }
  handleShow = () => {
    this.setState({ isShow: !this.state.isShow })
  }

  render() {
    return (
      <div style={{
        textAlign: "center",
      }} >
        <button onClick={this.handleShow}>{this.state.isShow ? "Hide" : "Show"}</button>
        {this.state.isShow === true ? <Profile /> : null}
        <div id='hello'><br />
          <h1>Welcome to the profile of Adel Imam</h1><br />
<h2>Some of Adel Imam's works:</h2><br/>
          <br/><br/><br/><br /><iframe width="560" height="315" src="https://www.youtube.com/embed/foDVbVQN4m4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />
          <iframe width="560" height="315" src="https://www.youtube.com/embed/_-tn9IyRCaU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />
          <iframe width="560" height="315" src="https://www.youtube.com/embed/hYGVog5NvTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />
          <footer style={{marginTop:"150px"}}>Considéré comme le meilleur comédien arabe de tous les temps5,<br /> il est apparu dans plus de cents films et une dizaine de pièces de théâtre6.</footer>
        </div>
        
      </div>
    )
  }
}

export default App

