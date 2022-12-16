import React, { useState } from "react";
import StandingPageNavBar from "../StandingPage/StadningPageNavBar/StandingPageNavBar";
import "./LeaguePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faS,
  faCaretLeft,
  faCaretRight,
  faAdd,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import logo from "../../img/mulogo.png";
const LeagueData = [];
function LeaguePage(props) {
  const LeagueData = [];

  const [DisplayPopUp, setDisplayPopUp] = useState(0);
  const [LeagueDataRender, setLeagueDataRender] = useState(LeagueData);
  function popUp() {
    setDisplayPopUp(1);
  }
  function SubmitForm(e) {
    e.preventDefault();

    const formHtml = document.querySelector("#addLeagueid");
    const data = new FormData(formHtml);
    const props = Object.fromEntries(data);
    console.log(props);
    const newLeague = {
      name: props.teamname,
      stadium: props.stadium,
    };
    // Send data
    axios.post("http://localhost:5000/api/clubs", newLeague).then((respone) => {
      console.log(respone.data);
    });

    //Clear input
    const inputs = document.querySelectorAll("input");
    inputs.forEach((element) => {
      element.value = "";
    });
    setDisplayPopUp(0);
  }
  function CancelForm(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll("input");
    inputs.forEach((element) => {
      element.value = "";
    });
    console.log(inputs);
    setDisplayPopUp(0);
  }

  return (
    <div className="LeaguePage">
      <div
        className="Modal"
        style={{ display: DisplayPopUp ? "block" : "none" }}
      >
        <div
          className="ModalForm"
          style={{ display: DisplayPopUp ? "block" : "none" }}
        >
          <div className="ModalFormHeader">Team infomation</div>
          <div className="ModalFormContent">
            <form id="addLeagueid" className="formModel" onSubmit={SubmitForm}>
              <div className="inputItem">
                <label htmlFor="teamname">Name</label>

                <input type="text" name="teamname" id="teamname" />
              </div>
              <div className="inputItem">
                <label htmlFor="stadium">stadium</label>

                <input type="text" name="stadium" id="stadium" />
              </div>

              <div className="formBtn">
                <div className="submit">
                  <button onClick={SubmitForm}>Submit</button>
                </div>
                <div className="cancel">
                  <button onClick={CancelForm}>Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <StandingPageNavBar Logo="League" />
      <div className="LeaguePageTable">
        <div className="PlayerTableHeader">
          <div className="TeamNums">Teams: {props.players} 20</div>

          <div className="add">
            <FontAwesomeIcon className="addIcon" icon={faAdd} onClick={popUp} />
          </div>
        </div>
        <div className="PlayerTableContent">
          <div className="PlayerTableContentMain">
            {/* {renderPlayerList?.map((p) => {
              return (
                <div className="PlayerItem">
                  <Player
                    type="TeamPlayer"
                    name={p.name}
                    age={p.age}
                    country={p.country}
                  />
                </div>
              );
            })} */}
            <div className="Team">
              <div className="TeamAva">
                <img className="TeamAvaImg" src={logo}></img>
              </div>
              <div className="TeamInfo">
                <span className="PlayerInfoName">
                  <span className="TeamTag">Manchester United</span>
                  {props.name}
                </span>
                <span className="PlayerInfoStadium">
                  <span className="TeamTag">Stadium: Old Traffold</span>
                  {props.age}
                </span>
              </div>
            </div>
          </div>

          {/* <div className="ControlBtn">
            <FontAwesomeIcon
              className="fai"
              icon={faCaretLeft}
              size="2x"
              onClick={prevClick}
            />
            <FontAwesomeIcon
              className="fai"
              icon={faCaretRight}
              size="2x"
              onClick={nextClick}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default LeaguePage;