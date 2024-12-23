import React from "react";
import "./team.css";

function Team() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="text-box d-flex flex-column justify-content-between">
              <div className="horizontal-flex">
                <img src="/Images/FireIcon.png" alt="Ticon" />
                <div>
                  <p className="font-weight-bold mb-0">Business Design</p>
                  <p className="text-muted font-size-14 mb-0 text-nowrap">New lesson is available</p>
                </div>
              </div>
              <p className="whattodo">What do you need to know to create better products?</p>
              <div className="spendInfo">
                <img src="/Images/Timer.png" alt="Timer Icon" />
                <p className="mb-0">85 mins</p>
                <img src="/Images/Video.png" alt="Video Icon" />
                <p className="mb-0">85 Video format</p>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-auto">
                <img src="/Images/Avatars.png" alt="Avatars" />
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-box">
              <div className="d-flex align-items-center justify-content-between mt-auto">
                <p className="teammember">Team members</p>
                <img src="/Images/Plus.png" alt="Add" />
              </div>
              <div className="teamdiv">
                <div className="d-flex align-items-center gap-10">
                  <img src="/Images/Emp1.png" alt="Employee" className="empimg" />
                  <div>
                    <p className="empname">Adela Parkson</p>
                    <p className="emprole">Creative Director</p>
                  </div>
                </div>
                <img src="/Images/More.png" alt="More" className="moreimg" />
              </div>
              <div className="teamdiv">
                <div className="d-flex align-items-center gap-10">
                  <img src="/Images/Emp2.png" alt="Employee" className="empimg" />
                  <div>
                    <p className="empname">Christian Mad</p>
                    <p className="emprole">Product Designer</p>
                  </div>
                </div>
                <img src="/Images/More.png" alt="More" className="moreimg" />
              </div>
              <div className="teamdiv">
                <div className="d-flex align-items-center gap-10">
                  <img src="/Images/Emp3.png" alt="Employee" className="empimg" />
                  <div>
                    <p className="empname">Jason Statham</p>
                    <p className="emprole">Junior Graphic Designer</p>
                  </div>
                </div>
                <img src="/Images/More.png" alt="More" className="moreimg" />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-box d-flex flex-column justify-content-between">
              <div className="d-flex align-items-center gap-10">
                <img src="/Images/thumb.png" alt="Ticon" className="thumbimg" />
              </div>
              <p className="cardtext">Control card security in-app with a tap</p>
              <div className="d-flex align-items-center gap-4">
                <p>Discover our cards benefits, with one tap.</p>
              </div>
              <div className="d-flex align-items-center mt-auto">
                <button className="btn btn-primary cardbutton">Cards</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-box" style={{ position: "relative", marginLeft:"10px" }}>
              {/* Main Background Image */}
              <img
                src="/Images/Bgimg.png"
                alt="Background"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                }}
              />

              {/* Top-Right Icon */}
              <img
                src="/Images/Time.png"
                alt="Top Right Icon"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  padding: "5px",
                }}
              />

              {/* Bottom-Left Icon */}
              <img
                src="/Images/Logo.png"
                alt="Bottom Left Icon"
                style={{
                  position: "absolute",
                  bottom: "177px",
                  left: "10px",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                }}
              />
              <p className="startbucks">Starbucks</p>
              <span
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <img
                  src="Images/fastfood.png"
                  alt="Fast Food"
                  style={{ width: "24px", height: "24px" }} 
                />
                <p style={{ margin: 0 }}>10% cashback & off</p>
              </span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Team;