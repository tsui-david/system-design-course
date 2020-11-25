import React from 'react';

export default class Home extends React.Component {
    render() {
      return (
        <div style={{"text-align": "center"}}>
          <h1 style={{"color": "grey", "font-size": "50px"}}>WELCOME</h1>
          <div>
            Welcome to localhost! This is a resource we've created to help engineers study system design concepts and the problems that would appear on most higher level software engineering interviews.
          </div>
          <h2>How to Get Around</h2>
          <img src="http://localhost:3000/image1.jpg" style={{"width":"500px"}}/>
          <div>I'm losing my mind</div>
          <h2>Tips: How to Best Use this Resource</h2>
          <div>This resource is</div>
        </div>
      )
    }
}