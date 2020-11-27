import React from 'react';

export default class Home extends React.Component {
    render() {
      return (
        <div style={{"text-align": "center", maxWidth: "1200px"}}>
          <h1 style={{"color": "Black", "font-size": "50px"}}>WELCOME</h1>
          <div style={{"padding-bottom": "15px"}}>
            Welcome to System Design School! This is a resource created to help engineers study system design concepts and the problems that would appear on most higher level software engineering interviews.
          </div>
          <div className="row-formation">
            <img src="http://localhost:3000/images/image1.jpg" style={{"width":"500px"}}/>
            <div className="column-formation">
              <h2>How to Best Use this Resource</h2>
              <div style={{"padding-bottom": "12px"}}>This application is divided into two sections:</div>
                <ul style={{"paddingLeft": "18px", "paddingBottom": "15px"}}>
                  <li>
                    Core Concepts: these are the building blocks of system design, by better understanding these concepts you'll know when and how to apply them when doing the problems
                  </li>
                  <li>
                    Problems: are based on real world interview questions and use many of the core concepts
                  </li>
                </ul>
                <div>
                While the core concepts can be done in any order, it is recommended that the problems be done descending order which is increasing order of difficulty (as shown by the color and difficultly number tiles). If you have no previous system design experience, it is highly recommended you review the core concepts as they are essential to be able to answer the problems.
              </div>
            </div>
          </div>
          <h2>How to Get Around</h2>
          <div style={{"textAlign": "left"}}>
            The sidebar is divided into two sections, the Concepts and Problems sections. Each section has several different topics and clicking on those questions will show the lessons for each topic.
            <br/>
            <br/>
            All the of individual lessons have a video lesson and one or more questions based on the content of the video. Questions modules, which look like this:
            <br/>
            <br/>
            <img src="http://localhost:3000/images/hintsAnswersRundown1.PNG" style={{width: "100%"}} />
            Usage of the questions is straightforward: selecting the "I need a hint" button will reveal a hint and prompt the user to either select another hint (if one is available) or Show the answer. At any point in time during this the "Show me the answer" button is available and will bypass all the hints and show the answer. iF there are more questions, once the answer if shown for the first question, a button prompting the user to select the "Next Question" will appear.
            <br/>
            <br/>
            Although it is not necessary to complete the questions in order to advance to the next lesson, it is highly recommended to go through all the questions. If you are already familiar with the material, going through the questions can be used as a way of testing knowledge or as a study and review technique.
          </div>
        </div>
      )
    }
}