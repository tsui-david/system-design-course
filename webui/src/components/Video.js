import React from "react";

export default class Video extends React.Component {
  getYoutubeID() {
    let regexp = /https:\/\/youtu.be\/(.*)/;
    const match = this.props.video_url.match(regexp)
    if (match === null)
        return;
    return this.props.video_url.match(regexp)[1];
  }

  render() {
    let youtubeID = this.getYoutubeID()

    if (youtubeID === undefined)
        return null

    return (
        <div
            className="video"
            style={{
            position: "relative",
            paddingBottom: "56.25%" /* 16:9 */,
            paddingTop: 25,
            height: 0,
            }}
        >
            <iframe
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
            }}
            src={`https://www.youtube.com/embed/${youtubeID}?rel=0`}
            frameBorder="0"
            />
        </div>
    );
  }
}
