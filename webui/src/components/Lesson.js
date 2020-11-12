import React from 'react';

export default class Lesson extends React.Component {
    render() {
      console.log(this.props.lessonData);
      return (
        <div>
            <h1>Path: {this.props.lessonID}</h1>
        </div>
      );
    }
}