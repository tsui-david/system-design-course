import React from "react";
import Video from './Video';

export default class Lesson extends React.Component {
  render() {
    console.log(this.props.lessonData);
    return (
      <div style={{}}>
        <Video
          style={{margin: "auto"}}
          video_url={this.props.lessonData.video_url}
        />
      </div>
    );
  }
}
