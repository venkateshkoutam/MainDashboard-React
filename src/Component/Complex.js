import React, { useState } from "react";
import "./complex.css";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

function Complex() {
  const [value, setValue] = useState(dayjs("2022-04-17"));

  return (
    <div className="container-fluid" style={{ padding: "12px" }}>
      <div className="row" style={{ gap: "16px" }}>
        <div className="col-md-6 graphmaindivcomplex" style={{ marginLeft: "-7px" }}>
          <div className="header">
            <p
              style={{
                color: "#2B3674",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "-2%",
                marginBottom: "30px",
                marginLeft: "27px",
              }}
            >
              Complex Table
            </p>
            <div className="image-box">
              <img src="/Images/Dots.png" alt="Icon" className="dotss-image" />
            </div>
          </div>
          <table className="table no-lines no-font color">
            <thead>
              <tr className="theads">
                <th scope="col"></th> 
                <th scope="col">NAME</th>
                <th scope="col">STATUS</th>
                <th scope="col">DATE</th>
                <th scope="col">PROGRESS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="trows">
                <td>
                  <input type="checkbox" id="harizonUI" />
                </td>
                <td>Harizon UI PRO</td>
                <td>17.5%</td>
                <td>24.Jan.2021</td>
                <td>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{ width: "17.5%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr className="trows">
                <td>
                  <input type="checkbox" id="harizonFree" />
                </td>
                <td>Harizon UI Free</td>
                <td>10%</td>
                <td>22.Jan.2021</td>
                <td>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr className="trows">
                <td>
                  <input type="checkbox" id="weeklyUpdate" />
                </td>
                <td>Weekly Update</td>
                <td>21.3%</td>
                <td>5.Jan.2021</td>
                <td>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{ width: "21.3%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr className="trows">
                <td>
                  <input type="checkbox" id="venus3D" />
                </td>
                <td>Venus 3D Asset</td>
                <td>31.5%</td>
                <td>7.Mar.2021</td>
                <td>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{ width: "31.5%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr className="trows">
                <td>
                  <input type="checkbox" id="marketplace" />
                </td>
                <td>Marketplace</td>
                <td>12.2%</td>
                <td>17.Dec.2021</td>
                <td>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{ width: "12.2%" }}
                    ></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-md-6">
          <div className="row" style={{ gap: "16px", marginTop: "-17px" }}>
            <div className="col-md-6">
         
            <img src="/Images/Medium_Tasks.png" className="medium"/>
            </div>
            <div className="col-md-6">
              <div>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  style={{ width: "252px", height: "318px" }}
                >
                  <DateCalendar
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    sx={{
                      width: "284px",
                      height: "307px",
                      backgroundColor: "white",
                      borderRadius: "10px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      marginRight: "31px",
                      marginTop: "16px",
                      marginLeft: "307px",
                      marginTop: "-322px",
              
                   
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Complex;
