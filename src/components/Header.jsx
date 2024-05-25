import React, { Component } from "react";

class Header extends Component {
  render() {
    const headerStyle = {
      backgroundColor: "#282c34",
      color: "#FFFFFF",
      padding: "5rem 20rem",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    };

    const titleStyle = {
      margin: "0",
      fontWeight: "bold",
    };

    return (
      <div style={headerStyle}>
        {" "}
        <h1 style={titleStyle}>Movie App</h1>
      </div>
    );
  }
}

export default Header;
