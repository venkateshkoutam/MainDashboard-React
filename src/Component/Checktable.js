import React from "react";
import "./checktable.css"; // Import the external CSS file

function Checktable() {
  return (
    <div>


    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 graphmaindiv1">
          <div className="header">
            <span className="checktable">Check Table</span>
            <div className="image-box">
              <img src="/Images/Dots.png" alt="Icon" className="dots-image" />
            </div>
          </div>
          <table className="table no-lines no-font color">
            <thead>
              <tr className="theads">
                <th scope="col"></th>
                <th scope="col">NAME</th>
                <th scope="col">PROGRESS</th>
                <th scope="col">QUANTITY</th>
                <th scope="col">DATE</th>
              </tr>
            </thead>
            <tbody>
              <tr className="trows">
                <td>
                  <input type="checkbox" id="harizonUI" />
                </td>
                <td>Harizon UI PRO</td>
                <td>17.5%</td>
                <td>2.458</td>
                <td>24.Jan.2021</td>
              </tr>
              <tr className="trows">
                <td>
                  <input type="checkbox" id="harizonFree" />
                </td>
                <td>Harizon UI Free</td>
                <td>10%</td>
                <td>1.485</td>
                <td>22.Jan.2021</td>
              </tr>
              <tr className="trows">
                <td>
                  <input type="checkbox" id="weeklyUpdate" />
                </td>
                <td>Weekly Update</td>
                <td>21.3%</td>
                <td>1.024</td>
                <td>5.Jan.2021</td>
              </tr>
              <tr className="trows">
                <td>
                  <input type="checkbox" id="venus3D" />
                </td>
                <td>Venus 3D Asset</td>
                <td>31.5%</td>
                <td>858</td>
                <td>7.Mar.2021</td>
              </tr>
              <tr className="trows">
                <td>
                  <input type="checkbox" id="marketplace" />
                </td>
                <td>Marketplace</td>
                <td>12.2%</td>
                <td>258</td>
                <td>17.Dec.2021</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <div className="subgraph-row">
            <div className="row">
<div className="col-md-6 ">
              <img src="/Images/Lineimg.png" className="Lines" alt="Line Graph" />
            </div>
            <div className="col-md-6 ">
              <img src="/Images/Pieimg.png" className="pie" alt="Pie Chart" />
              
            </div>
            </div>
            
          </div>
        </div>
        

     
      </div>
    </div>
    </div>
  );
}

export default Checktable;
