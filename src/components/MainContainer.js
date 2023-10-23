import React from "react";
import "../styles/MainContainer.css";
import { TbPlayerTrackNext } from "react-icons/tb";
import { BsMicMuteFill } from "react-icons/bs";
import { BsCameraVideoOffFill } from "react-icons/bs";

export default function MainContainer() {
  return (
    <div className="container">
      <div className="left">
        <div className="left-up">I AM UP</div>
        <div className="left-down">
          <div className="btn-container">
            <BsCameraVideoOffFill className="ctrl-btn" />
          </div>

          <div className="btn-container">
            <BsMicMuteFill className="ctrl-btn"/>
          </div>
          {/* <div>i am down</div> */}
          <div className="btn-container" id="next">
            <TbPlayerTrackNext
              className="ctrl-btn"
              style={{ fontSize: "3em" }}
            />
          </div>
        </div>
      </div>
      <div className="right">I AM RIGHT DABBA</div>
    </div>
  );
}
