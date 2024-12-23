import React from "react";
import Graph from "./Graph";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-4">
              <div className="card earnings-card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        className="card-image"
                        src="/Images/TIcon.png"
                        alt="Earnings Icon"
                      />
                    </div>
                    <div className="col-md-8">
                      <p className="card-text">Earnings</p>
                      <h6 className="card-number">$370.4</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card spend-card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        className="card-image"
                        src="/Images/Dollar.png"
                        alt="Spend Icon"
                      />
                    </div>
                    <div className="col-md-8">
                      {/* <p className="card-text">Spend this</p> */}
                      <p
                        className="card-text truncate-text"
                        title="Spend this month"
                      >
                        Spend this month
                      </p>
                      <h6 className="card-number">$642.39</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card sales-card">
                <div className="card-body">
                  <div className="sales-text">
                    <p className="card-text">Sales</p>
                    <p className="card-text">$574.34</p>
                  </div>
                  <h6 className="card-number test" title="+23% since best month">+23% since best month</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-4">
              <div className="card earnings-card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        className="card-image"
                        src="/Images/TIcon.png"
                        alt="Earnings Icon"
                      />
                    </div>
                    <div className="col-md-8">
                      <p className="card-text">Earnings</p>
                      <h6 className="card-number">$370.4</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card spend-card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        className="card-image"
                        src="/Images/Dollar.png"
                        alt="Spend Icon"
                      />
                    </div>
                    <div className="col-md-8">
                    <p
                        className="card-text truncate-text"
                        title="Spend this month"
                      >
                        Spend this month
                      </p>
                      <h6 className="card-number">$642.39</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card earnings-card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        className="card-image"
                        src="/Images/TIcon.png"
                        alt="Earnings Icon"
                      />
                    </div>
                    <div className="col-md-8">
                      <p className="card-text">Earnings</p>
                      <h6 className="card-number">$370.4</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Graph />
    </div>
  );
}

export default Dashboard;
