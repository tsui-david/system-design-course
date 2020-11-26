import React from "react";
import { withRouter } from "react-router-dom";
import banner from "../banner_logo.png";
import { Layout } from "antd";

const { Header } = Layout;

class Head extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Header className="header">
        <div
          className="logo"
          style={{cursor:'pointer'}}
          onClick={() => {
            this.props.history.push("/");
          }}
        >
          <img
            src={banner}
            style={{ objectFit: "cover", width: "300px", marginLeft: "100px" }}
          />
        </div>
      </Header>
    );
  }
}

export default withRouter(Head);
