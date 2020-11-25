import React from "react";

const TopBar = () => {
  const topBarStyle = {
    top: 0,
    height: "70px",
    width: "100%",
    backgroundColor: "black",
    color: "white",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    padding: 5,
  };
  return (
    <div className="Top-bar" style={topBarStyle}>
      <h1 style={{alignSelf:"center"}}>Concierge</h1>
    </div>
  );
};

export default TopBar;
