import React from "react";
import "./Body.css";
import Header from "./Header";
function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img
          src="https://dailymix-images.scdn.co/v2/img/d9cf81f26581c55c3ef9aba1acc1332ee915c30a/1/en/large"
          alt=""
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>description</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
