import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./Navbar.css";

const Breadcrumb = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  return (
    <div className="breadcrumb">
      {pathParts.map((part, index) => {
        const path = "/" + pathParts.slice(0, index + 1).join("/");
        return (
          <React.Fragment key={path}>
            <Link to={path} className="navlink">{part}</Link>
            {index < pathParts.length - 1 && " / "}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const tabs = [
    { name: "Dashboard", icon: "/Images/DIcon.png" },
    { name: "NFT Marketplace", icon: "/Images/NIcon.png" },
    { name: "Table", icon: "/Images/TIcon.png" },
    { name: "Kanban", icon: "/Images/KIcon.png" },
    { name: "Profile", icon: "/Images/PIcon.png" },
    { name: "Sign In", icon: "/Images/SIcon.png" },
  ];

  const handleTabClick = (e, tabName) => {
    if (tabName !== "Dashboard") {
      e.preventDefault(); // Prevents the default link behavior for non-Dashboard tabs
    } else {
      setActiveTab(tabName); // Sets the active tab to "Dashboard"
    }
  };

  return (
    <Router>
      <div className="maindiv">
        <div className="sidebar">
          <div className="statictext">
            <p className="logotext">
              <b className="Horizontext">HORIZON</b> <span className="freetext">FREE</span>
            </p>
          </div>
          <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
            {tabs.map((tab) => (
              <li
                key={tab.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "15px 20px",
                  gap: "10px",
                }}
              >
                <img
                  src={tab.icon}
                  alt={`${tab.name} icon`}
                  style={{ width: "20px", height: "20px" }}
                  onError={(e) => {
                    console.error(`Image not found: ${tab.icon}`);
                    e.target.style.display = "none"; 
                  }}
                />
                <Link
                  to={tab.name === "Dashboard" ? `/${tab.name.toLowerCase().replace(/\s+/g, "-")}` : "#"}
                  className={activeTab === tab.name ? "navlink-active" : "navlink"}
                  onClick={(e) => handleTabClick(e, tab.name)}
                >
                  {tab.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="container">
          <div className="">
            <div className="">
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <div className="breadcrumb-container">
                  <p className="breadcrumb-path">{`Pages/${activeTab}`}</p>
                  {/* <Breadcrumb /> */}
                  <span className="Maindashboard">Main Dashboard</span>
                </div>
                <div className="main-dashboard"></div>
                <div className="search-wrapper">
                  <div className="searchmaindiv">
                    <div className="searchdiv">
                      <img
                        src="/Images/SearchIcon.png"
                        alt="Search Icon"
                        className="searchicon"
                      />
                      <input
                        type="text"
                        placeholder="search..."
                        className="searchinput"
                      />
                    </div>
                    <img src="/Images/Alarm.png" alt="Alarm Icon" style={{ width: "14px", height: "19px" }} />
                    <img src="/Images/Moon.png" alt="Moon Icon" style={{ width: "14px", height: "19px" }} />
                    <img src="/Images/Info.png" alt="Info Icon" style={{ width: "20px", height: "20px" }} />
                    <img src="/Images/Avatar.png" alt="Avatar Icon" style={{ width: "29px", height: "30px" }} />
                  </div>
                </div>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route
                    path="/nft-marketplace"
                    element={<div style={{ padding: "20px" }}>This is a placeholder for NFT Marketplace.</div>}
                  />
                  <Route
                    path="/table"
                    element={
                      <>
                        <div style={{ padding: "20px" }}>This is a placeholder for Table.</div>
                        <h2 style={{ color: "#2B3674", textAlign: "center", margin: "20px 0" }}>Pages/Table</h2>
                      </>
                    }
                  />
                  <Route
                    path="/kanban"
                    element={<div style={{ padding: "20px" }}>This is a placeholder for Kanban.</div>}
                  />
                  <Route
                    path="/profile"
                    element={<div style={{ padding: "20px" }}>This is a placeholder for Profile.</div>}
                  />
                  <Route
                    path="/sign-in"
                    element={<div style={{ padding: "20px" }}>This is a placeholder for Sign In.</div>}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;