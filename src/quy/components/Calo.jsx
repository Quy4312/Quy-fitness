import React, { useEffect, useRef } from "react";
import "./Calo.css";
import { useState } from "react";
import { Fooditem } from "./Fooditem";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useContext } from "react";
import { TdeeContext } from "../context/Context";
import { v4 as uuidv4 } from "uuid";
import autoAnimate from "@formkit/auto-animate";

ChartJs.register(Tooltip, Title, ArcElement, Legend);

export const Calo = () => {
  const tdee = useContext(TdeeContext);

  const [menu, setMenu] = useState([
    {
      path: "ucgasong.jpg",
      text: "Ức Gà ( Sống )",
      protein: "31",
      carb: "0",
      fat: "4",
      calo: "165",
      id: uuidv4(),
    },
    {
      path: "duigasong.jpg",
      text: "Đùi Gà ( Sống )",
      protein: "19",
      carb: "0",
      fat: "9",
      calo: "161",
      id: uuidv4(),
    },
    {
      path: "cacao.jpg",
      text: "Bột Cacao",
      protein: "20",
      carb: "20",
      fat: "10",
      calo: "240",
      id: uuidv4(),
    },
    {
      path: "cua.jpg",
      text: "Thịt Cua",
      protein: "19",
      carb: "0",
      fat: "2",
      calo: "97",
      id: uuidv4(),
    },
    {
      path: "duachuot1.PNG",
      text: "Dưa Chuột",
      protein: "1",
      carb: "4",
      fat: "0",
      calo: "15",
      id: uuidv4(),
    },
    {
      path: "cucai.PNG",
      text: "Củ cải",
      protein: "1",
      carb: "4",
      fat: "0",
      calo: "18",
      id: uuidv4(),
    },
    {
      path: "trung.PNG",
      text: "Trứng",
      protein: "13",
      carb: "1",
      fat: "10",
      calo: "143",
      id: uuidv4(),
    },
    {
      path: "cavien.PNG",
      text: "Cá Viên",
      protein: "19",
      carb: "4",
      fat: "14",
      calo: "221",
      id: uuidv4(),
    },
    {
      path: "nuocmam.PNG",
      text: "Nước Mắm",
      protein: "5",
      carb: "4",
      fat: "0",
      calo: "35",
      id: uuidv4(),
    },
    {
      path: "ucgaran.PNG",
      text: "Ức Gà ( Rán )",
      protein: "25",
      carb: "9",
      fat: "13",
      calo: "260",
      id: uuidv4(),
    },
    {
      path: "duigaran.PNG",
      text: "Đùi Gà ( Rán )",
      protein: "27",
      carb: "2",
      fat: "14",
      calo: "245",
      id: uuidv4(),
    },
    {
      path: "dautay.PNG",
      text: "Dâu Tây",
      protein: "1",
      carb: "9",
      fat: "0",
      calo: "36",
      id: uuidv4(),
    },
    {
      path: "toi.PNG",
      text: "Tỏi",
      protein: "6",
      carb: "33",
      fat: "0",
      calo: "149",
      id: uuidv4(),
    },
    {
      path: "gung.PNG",
      text: "Gừng",
      protein: "0",
      carb: "80",
      fat: "0",
      calo: "300",
      id: uuidv4(),
    },
    {
      path: "nuocdua.PNG",
      text: "Nước Dừa",
      protein: "0",
      carb: "16",
      fat: "1",
      calo: "71",
      id: uuidv4(),
    },
    {
      path: "longtrangtrung.PNG",
      text: "Lòng Trắng Trứng",
      protein: "11",
      carb: "0",
      fat: "0",
      calo: "52",
      id: uuidv4(),
    },
    {
      path: "longdotrung.PNG",
      text: "Lòng Đỏ Trứng",
      protein: "14",
      carb: "1",
      fat: "30",
      calo: "327",
      id: uuidv4(),
    },
    {
      path: "buoi.PNG",
      text: "Bưởi",
      protein: "0.2",
      carb: "7.3",
      fat: "0",
      calo: "30",
      id: uuidv4(),
    },
    {
      path: "cam.PNG",
      text: "Cam",
      protein: "0.9",
      carb: "8.4",
      fat: "0",
      calo: "37",
      id: uuidv4(),
    },
    {
      path: "chanh.PNG",
      text: "Chanh",
      protein: "0.9",
      carb: "4.8",
      fat: "0",
      calo: "23",
      id: uuidv4(),
    },
    {
      path: "chuoitay.PNG",
      text: "Chuối",
      protein: "0.9",
      carb: "15",
      fat: "0.3",
      calo: "66",
      id: uuidv4(),
    },
    {
      path: "dudu.PNG",
      text: "Đu Đủ",
      protein: "1",
      carb: "7.7",
      fat: "0",
      calo: "35",
      id: uuidv4(),
    },
    {
      path: "duahau.PNG",
      text: "Dưa Hấu",
      protein: "1.2",
      carb: "2.3",
      fat: "0.2",
      calo: "16",
      id: uuidv4(),
    },
    {
      path: "thitbo.PNG",
      text: "Thịt Bò",
      protein: "21",
      carb: "0",
      fat: "3.8",
      calo: "118",
      id: uuidv4(),
    },
    {
      path: "thitbokho.PNG",
      text: "Thịt Bò Khô",
      protein: "51",
      carb: "5.2",
      fat: "1.6",
      calo: "239",
      id: uuidv4(),
    },
    {
      path: "thitlonbachi.PNG",
      text: "Thịt Heo Ba Chỉ",
      protein: "16.5",
      carb: "0",
      fat: "21.5",
      calo: "260",
      id: uuidv4(),
    },
    {
      path: "thitlonnac.PNG",
      text: "Thịt Heo Nạc",
      protein: "19",
      carb: "0",
      fat: "7",
      calo: "139",
      id: uuidv4(),
    },
    {
      path: "cachep.PNG",
      text: "Cá Chép",
      protein: "16",
      carb: "0",
      fat: "3.6",
      calo: "96",
      id: uuidv4(),
    },
    {
      path: "cahoi.PNG",
      text: "Cá Hồi",
      protein: "22",
      carb: "0",
      fat: "5.3",
      calo: "136",
      id: uuidv4(),
    },
    {
      path: "cangu.PNG",
      text: "Cá Ngừ",
      protein: "21",
      carb: "0",
      fat: "0.3",
      calo: "87",
      id: uuidv4(),
    },
    {
      path: "carophi.PNG",
      text: "Cá Rô Phi",
      protein: "19.7",
      carb: "0",
      fat: "2.3",
      calo: "100",
      id: uuidv4(),
    },
    {
      path: "luon.PNG",
      text: "Thịt Lươn",
      protein: "20",
      carb: "0",
      fat: "1.5",
      calo: "99",
      id: uuidv4(),
    },
    {
      path: "ocbuou.PNG",
      text: "Ốc Bươu",
      protein: "11",
      carb: "8.3",
      fat: "0.7",
      calo: "84",
      id: uuidv4(),
    },
    {
      path: "so.PNG",
      text: "Sò",
      protein: "8.8",
      carb: "3",
      fat: "0.4",
      calo: "51",
      id: uuidv4(),
    },
    {
      path: "tom.PNG",
      text: "Tôm Biển",
      protein: "17.6",
      carb: "0.9",
      fat: "0.9",
      calo: "82",
      id: uuidv4(),
    },
    {
      path: "matong.PNG",
      text: "Mật Ong",
      protein: "0.4",
      carb: "81.3",
      fat: "0",
      calo: "327",
      id: uuidv4(),
    },
    {
      path: "cocacola.PNG",
      text: "Cocacola",
      protein: "0",
      carb: "10.4",
      fat: "0",
      calo: "42",
      id: uuidv4(),
    },
    {
      path: "bia.PNG",
      text: "Bia",
      protein: "1.6",
      carb: "9",
      fat: "0",
      calo: "43",
      id: uuidv4(),
    },
    {
      path: "raumuong.PNG",
      text: "Rau Muống",
      protein: "3.2",
      carb: "2.5",
      fat: "0",
      calo: "23",
      id: uuidv4(),
    },
    {
      path: "khoailang.PNG",
      text: "Khoai Lang",
      protein: "0.8",
      carb: "28.5",
      fat: "0.5",
      calo: "119",
      id: uuidv4(),
    },
    {
      path: "com.jpg",
      text: "Cơm Trắng",
      protein: "2.7",
      carb: "28.2",
      fat: "0.3",
      calo: "130",
      id: uuidv4(),
    },
    {
      path: "rauchanvit.jpg",
      text: "Rau Chân Vịt",
      protein: "2.9",
      carb: "3.6",
      fat: "3.3",
      calo: "23",
      id: uuidv4(),
    },
  ]);
  const [searchfood, setSearchfood] = useState("");
  const [swap, setSwap] = useState(false);
  // const [servings, setServings] = useState([]);

  const foodListRef = useRef(null);
  const servingsListRef = useRef(null);

  const handleSwapChange = () => {
    setSwap(!swap);
  };
  const handleSearchfoodChange = (e) => {
    setSearchfood(e.target.value);
  };

  const saveServings = () => {
    const setjson = JSON.stringify(tdee.servings);
    localStorage.setItem(`${tdee.accountname}list`, setjson);
  };
  const removeFood = (id, calo, protein, carb, fat, inputfooditem) => {
    let p = tdee.proteintotal - Number((inputfooditem / 100) * protein);
    let c = tdee.carbtotal - Number((inputfooditem / 100) * carb);
    let f = tdee.fattotal - Number((inputfooditem / 100) * fat);
    tdee.setCalocurrent(
      (prev) => (prev = prev - Number((inputfooditem / 100) * calo))
    );
    tdee.setProteintotal(
      (prev) => (prev = prev - Number((inputfooditem / 100) * protein))
    );
    tdee.setCarbtotal(
      (prev) => (prev = prev - Number((inputfooditem / 100) * carb))
    );
    tdee.setFattotal(
      (prev) => (prev = prev - Number((inputfooditem / 100) * fat))
    );

    tdee.setDatachart({
      datasets: [
        {
          data: [
            (p / (p + c + f)) * 100,
            (c / (p + c + f)) * 100,
            (f / (p + c + f)) * 100,
          ],
          backgroundColor: ["#ff0000b5", "#d1ff00b5", "#00fffab5"],
          borderColor: "transparent",
        },
      ],

      labels: ["Protein", "Tinh Bột", "Chất Béo"],
    });
    const newList = tdee.servings.filter((item) => {
      return item.id !== id;
    });
    tdee.setServings(newList);
    // console.log(newList);
  };

  useEffect(() => {
    foodListRef.current && autoAnimate(foodListRef.current);
  }, [foodListRef]);
  useEffect(() => {
    servingsListRef.current && autoAnimate(servingsListRef.current);
  }, [servingsListRef]);

  return (
    <div className="calo-ctn">
      <div className="calo-menu">
        <div className="calo-menu-title">BẢNG THÀNH PHẦN DINH DƯỠNG </div>

        <div className="calo-menu--searchfood--ctn">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            className="calo-menu--searchfood"
            type="text"
            placeholder="Enter food's name here"
            value={searchfood}
            onChange={handleSearchfoodChange}
          />
        </div>
        {!menu?.filter((item) => {
          return (
            item.text.toLowerCase().indexOf(searchfood.trim().toLowerCase()) !==
            -1
          );
        }).length && <div>Không có kết quả</div>}
        <div className="food-list" ref={foodListRef}>
          {menu
            ?.filter((item) => {
              return (
                item.text
                  .toLowerCase()
                  .indexOf(searchfood.trim().toLowerCase()) !== -1
              );
            })
            .map((item) => (
              <Fooditem
                key={item.path + item.text}
                path={item.path}
                text={item.text}
                protein={item.protein}
                carb={item.carb}
                fat={item.fat}
                calo={item.calo}
                calocurrent={tdee.calocurrent}
                setCalocurrent={tdee.setCalocurrent}
                proteintotal={tdee.proteintotal}
                carbtotal={tdee.carbtotal}
                fattotal={tdee.fattotal}
                setProteintotal={tdee.setProteintotal}
                setCarbtotal={tdee.setCarbtotal}
                setFattotal={tdee.setFattotal}
                carbpercent={tdee.carbpercent}
                setCarbpercent={tdee.setCarbpercent}
                fatpercent={tdee.fatpercent}
                setFatpercent={tdee.setFatpercent}
                proteinpercent={tdee.proteinpercent}
                setProteinpercent={tdee.setProteinpercent}
                setDatachart={tdee.setDatachart}
                servings={tdee.servings}
              />
            ))}
        </div>
      </div>
      <div className="chart-servings-container">
        <div className="swap-btn" onClick={handleSwapChange}>
          <i class="fa-solid fa-rotate"></i>
        </div>
        <div className={`chart-servings ${swap ? "swap" : ""}`}>
          <div className="chart">
            <Doughnut data={tdee.datachart} />
            <div className="calocurrent-text">
              {tdee.calocurrent.toFixed(1)}
            </div>
          </div>
          <div className="servings">
            <div className="servings-title">Thực Đơn</div>
            <div className="save-btn" onClick={saveServings}>
              Lưu
            </div>
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

                      <button
                        className="fooditem-button-servings"
                        onClick={() => {
                          removeFood(
                            item.id,
                            item.calo,
                            item.protein,
                            item.carb,
                            item.fat,
                            item.inputfooditem
                          );
                        }}
                      >
                        <i class="fa-regular fa-trash-can trash-ic"></i>
                        Xóa món
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
