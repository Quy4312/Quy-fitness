import React, { useRef } from "react";
import "./Oldservings.css";
import { useContext, useEffect, useState } from "react";
import { TdeeContext } from "../context/Context";
import autoAnimate from "@formkit/auto-animate";

export const Oldservings = () => {
  const tdee = useContext(TdeeContext);
  const servingsListRef = useRef(null);
  const [servingslocal, setServingslocal] = useState([]);

  useEffect(() => {
    const listlocal = JSON.parse(
      localStorage.getItem(`${tdee.accountname}list`)
    );
    if (listlocal) {
      setServingslocal(listlocal);
      console.log(listlocal);
    }
  }, []);
  return (
    <div className="oldservings-ctn">
      <div className="oldservings">
        <div className="servings-title">Thực Đơn Đã Lưu</div>
        <div>
          <div className="food-list" ref={servingsListRef}>
            {!tdee.servings?.length && (
              <div className="nodata-noti">Chưa có món...</div>
            )}
            {tdee.servings.length !== 0 &&
              tdee.servings.map((item) => (
                <div className="fooditem-ctn" key={item.id}>
                  <div>
                    <img
                      className="food-img"
                      src={require(`../img/${item.path}`)}
                      alt=""
                    />
                  </div>
                  <div className="fooditem-text">{item.text}</div>

                  <div
                    className="fooditem-calo"
                    style={{ marginLeft: "-172px", marginTop: "12px" }}
                  >
                    Khối Lượng: {item.inputfooditem} g
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
