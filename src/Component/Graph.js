import React from "react";
import { LineChart } from "@mui/x-charts";

import "../graph.css";
import Checktable from "./Checktable";

import Complex from "./Complex";
import Team from "./Team";

function Graph() {
  return (
    <div>


    <div className="container-fluid " style={{ padding: "12px" }} >
      <div className="row" style={{ gap: "16px" }}>
        {" "}
        <div className="col-md-6 graphmaindiv">
          {" "}
          <div className="row">
            <div className="col-md-5">
              <img src="/Images/Timeline Button.png"/>

              <h4 className="dollartext">$37.5K</h4>
              <div style={{ marginTop: "-15px" }}>
                <div className="spendInfo">
                  <span className="totalspent">Total Spent</span>
                  <img
                    src="/Images/arrow_drop_up.png"
                    style={{
                      width: "18px",
                      marginLeft: "2px",
                    }}
                  />
                  <span className="percentageText">+2.45%</span>
                </div>
              </div>

              <div style={{ marginTop: "-15px" }}>
                <div className="trackInfo">
                  <img
                    src="/Images/Frame 5.png"
                    className="frameimg"
                  />
                  <span className="trackText">On track</span>
                </div>

              </div>
            </div>
            <div className="col-md-7" style={{ position: "relative" }}>
              <img
                style={{
                  position: "absolute",
                  right: "20%",
                  top: "11%",
                  transform: "translateY(-50%)", 
                  background: "#F4F7FE",
                  width: "51px",
                  height: "48px",
                  borderRadius: "13px",
                }}
                src="/Images/TIcon.png"
              />
              <div>
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                  ]}
                  width={343}
                  height={275}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 graphmaindiv">
          <img src="/Images/Graph1.png" className="graph1" />
        </div>
      </div>
      </div>
      <Checktable />
      <Complex />
      <Team />
    </div>
  );
}

export default Graph;
