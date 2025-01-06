import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="main">
      <div className="sidebar">
        <ul className="explore">
        <h3>Explore</h3>
        <hr></hr>
          <li>
            <i className="fa-solid fa-cart-shopping"></i> Shopping
          </li>
          <li>
            <i className="fa-solid fa-music"></i> Music
          </li>
          <li>
            <i className="fa-solid fa-film"></i> Films
          </li>
          <li>
            <i className="fa-solid fa-globe"></i> Live
          </li>
          <li>
            <i className="fa-solid fa-newspaper"></i> News
          </li>
          <li>
            <i className="fa-solid fa-gamepad"></i> Gaming
          </li>

        </ul>
        <hr />
        <div>
          <ul>
            <li>
              <i className="fa-solid fa-play icon"></i>Your Videos
            </li>
            <li>
              <i className="fas fa-clock icon"></i>Watch Later
            </li>
            <li>
              <i className="fas fa-thumbs-up icon"></i>Liked Videos
            </li>
          </ul>
          <hr />
        </div>
        <div>
          <h3>Subscriptions</h3>
          <ul>
            <li className="sub">
              <img
                src="https://yt3.googleusercontent.com/ytc/AIdro_kX3sdbuu3KFmRPsmlu0R5Rx_BhpxwupjtvJmkEdNfla7w=s160-c-k-c0x00ffffff-no-rj"
                alt="CodeWithHarry"
              />
              <h3>CodeWithHarry</h3>
            </li>
            <li className="sub">
              <img
                src="https://yt3.googleusercontent.com/EaHjbYWOY1j94LJoZfJYU9GTo2KOsCtKdZ9GLpUVOa1AWYFDFfT10LKX8yFaqnpyRzX9tYxzgQ=s160-c-k-c0x00ffffff-no-rj"
                alt="MortaL"
              />
              <h3>MortaL</h3>
            </li>
            <li className="sub">
              <a></a>
              <img
                src="https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s160-c-k-c0x00ffffff-no-rj"
                alt="w3schools"
              />
              <h3>w3schools.com</h3>
            </li>
            <li className="sub">
              <img
                src="https://yt3.googleusercontent.com/00yIYVKjmFvR7sFZXmP5aMq1u0P7ZcLfnDW27A7zRD1hTqcWLwYn0-o_5rGkK2eKfCf43ueE7Q=s160-c-k-c0x00ffffff-no-rj"
                alt="Apna College"
              />
              <h3>Apna College</h3>
            </li>
          </ul>
          <hr />
        </div>
        <div>
        
          <ul>
            <li>
              <i className="fas fa-house icon"></i> Home
            </li>
            <li>
              <i className="fas fa-fire icon"></i> Trending
            </li>
            <li>
              <i className="fas fa-bell icon">
              </i> Subscriptions
            </li>
            <li>
              <i className="fas fa-folder-open icon"></i> Library
            </li>
            <li>
              <i className="fas fa-history icon"></i> History
            </li>
            <li>
              <i className="fas fa-video icon"></i> Your Videos
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
