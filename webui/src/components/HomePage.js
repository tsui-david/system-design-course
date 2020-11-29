import React from "react";
import { Row, Image } from "antd";

// for some reason i can't get the class css to import... so i'm just going to do in style
import "./components.css";

export default class Home extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: "1200px" }}>
        <Row>
          <Image src="/images/hero.png" preview={false} />
        </Row>
        <Row
          style={{ display: "grid", gridTemplateColumns: "300px 50px auto" }}
        >
          <span>
            <Image src="/images/home1.png" preview={false} />
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gridColumnStart: 3,
              fontSize: "17px",
            }}
          >
            <div>
              System design interviews test software engineers on the ability to
              design a complex system that can range anywhere from designing
              Youtube to designing Uber. <b>But don't worry.</b> Just like a
              coding interview, tackling these interviews can also become easier
              with practice.
            </div>
          </div>
        </Row>
        <Row
          style={{ display: "grid", gridTemplateColumns: "auto 50px 300px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "17px",
            }}
          >
            <div>
              <b>Start first with concept lessons</b> to understand the fundamental components that
              make up a software system.
            </div>
          </div>
          <span style={{ gridColumnStart: 3 }}>
            <Image src="/images/concepts1.png" preview={false} />
          </span>
        </Row>
        <br />
        <Row
          style={{ display: "grid", gridTemplateColumns: "300px 50px auto" }}
        >
          <span>
            <Image src="/images/problems1.png" preview={false} />
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gridColumnStart: 3,
              fontSize: "17px",
            }}
          >
            <div>
              <b>Then delve into problems</b> to apply what you have learned. 
              These problems are broken down step by step following the system design framework.
               Problems are labled with numbers signifying difficulty. The higher the number, the more difficult it is.
            </div>
          </div>
        </Row>
        <br />
        <Row
          style={{ display: "grid", gridTemplateColumns: "500px 50px auto" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "17px",
            }}
          >
            <div>
              Along the way, review these problems by answering the interactive questions. System design questions can be broad and no one answer is truly correct. Try to come up with your own answer before looking at the solution.
            </div>
          </div>
          <span style={{ gridColumnStart: 3 }}>
            <Image src="/images/hintsAnswersRundown1.PNG" preview={false} />
          </span>
        </Row>
        <div style={{padding: "20px"}}></div>
      </div>

      // <div style={{textAlign: "center", maxWidth: "1200px"}}>
      //   <h1 style={{color: "Black", fontSize: "50px"}}>WELCOME</h1>
      //   <div style={{paddingBottom: "15px"}}>
      //     Welcome to System Design School! This is a resource created to help engineers study system design concepts and the problems that would appear on most higher level software engineering interviews.
      //   </div>
      //   <div className="row-formation">
      //     <img src="/images/image1.jpg" style={{width:"500px"}}/>
      //     <div className="column-formation">
      //       <h2>How to Best Use this Resource</h2>
      //       <div style={{paddingBottom: "12px"}}>This application is divided into two sections:</div>
      //         <ul style={{paddingLeft: "18px", paddingBottom: "15px"}}>
      //           <li>
      //             Core Concepts: these are the building blocks of system design, by better understanding these concepts you'll know when and how to apply them when doing the problems
      //           </li>
      //           <li>
      //             Problems: are based on real world interview questions and use many of the core concepts
      //           </li>
      //         </ul>
      //         <div>
      //         While the core concepts can be done in any order, it is recommended that the problems be done descending order which is increasing order of difficulty (as shown by the color and difficultly number tiles). If you have no previous system design experience, it is highly recommended you review the core concepts as they are essential to be able to answer the problems.
      //       </div>
      //     </div>
      //   </div>
      //   <h2>How to Get Around</h2>
      //   <div style={{"textAlign": "left"}}>
      //     The sidebar is divided into two sections, the Concepts and Problems sections. Each section has several different topics and clicking on those questions will show the lessons for each topic.
      //     <br/>
      //     <br/>
      //     All the of individual lessons have a video lesson and one or more questions based on the content of the video. Questions modules, which look like this:
      //     <br/>
      //     <br/>
      //     <img src="/images/hintsAnswersRundown1.PNG" style={{width: "100%"}} />
      //     Usage of the questions is straightforward: selecting the "I need a hint" button will reveal a hint and prompt the user to either select another hint (if one is available) or Show the answer. At any point in time during this the "Show me the answer" button is available and will bypass all the hints and show the answer. iF there are more questions, once the answer if shown for the first question, a button prompting the user to select the "Next Question" will appear.
      //     <br/>
      //     <br/>
      //     Although it is not necessary to complete the questions in order to advance to the next lesson, it is highly recommended to go through all the questions. If you are already familiar with the material, going through the questions can be used as a way of testing knowledge or as a study and review technique.
      //   </div>
      // </div>
    );
  }
}
