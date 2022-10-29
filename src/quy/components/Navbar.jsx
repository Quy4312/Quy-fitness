import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { TdeeContext } from "../context/Context";

export const Navbar = () => {
  const tdee = useContext(TdeeContext);
  const style = {
    background: "rgba(193, 209, 193, 0.55)",
    boxShadow: "0 8px 32px 0 rgb(31 38 135 / 37%)",
    webkitBackdropFilter: "blur(8px)",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    borderRadius: "3px",
    paddingTop: "5px",
  };
  console.log(tdee.blurred);

  const navigate = useNavigate();
  return (
    <div className="navbar-ctn" style={tdee.blurred ? { style } : {}}>
      <div
        className="nav-item"
        onClick={() => {
          navigate("/");
          tdee.setColoricon("white");
          tdee.setBlurred(false);
        }}
      >
        <i className="fa-solid fa-house iconnav"></i>
        <div className="food-text">Home</div>
      </div>
      <div className="wall"></div>
      <div
        className="nav-item"
        onClick={() => {
          navigate("/tdee");
          tdee.setColoricon("white");
          tdee.setBlurred(false);
        }}
      >
        <i className="fa-solid fa-dumbbell iconnav"></i>

        <div className="food-text">TDEE</div>
      </div>
      <div className="wall"></div>

      <div
        className="nav-item"
        onClick={() => {
          navigate("/calo");
          tdee.setColoricon("black");
          tdee.setBlurred(true);
        }}
      >
        <i class="fa-solid fa-bowl-food iconnav"></i>

        <div className="food-text">Calo</div>
      </div>
      <div className="wall"></div>

      <div
        className="nav-item"
        onClick={() => {
          navigate("/weather");
          tdee.setColoricon("white");
          tdee.setBlurred(false);
        }}
      >
        <i className="fa-solid fa-cloud iconnav"></i>

        <div className="food-text">Weather</div>
      </div>
    </div>
  );
};
