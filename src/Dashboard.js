import React from "react";
import pieData from "./pieChartData";
import { PieChart } from "react-minimal-pie-chart";
import Barchart from "./Barchart";

export default function Dashboard({
  name,
  email,
  username,
  password,
  logoutHandler,
}) {
  return (
    <>
      <div className="userinfo">
        <h2 style={{ color: "#fff" }}>Task 1: User-Info</h2>
        <div className="details">{`Name: ${name}`}</div>
        <div className="details">{`Username: ${username}`}</div>
        <div className="details">{`Email: ${email}`}</div>
        <div className="details">{`Password: ${password}`}</div>
        <button onClick={logoutHandler} className="logout-button button">
          Log Out
        </button>
      </div>

      <div className="pie-chart-container">
        <h2 style={{ color: "#fff" }}>Task 2: Pie-Chart</h2>
        <div className="pie-chart">
          <p style={{ color: "#fff", margin: "10px" }}>Male Citizen</p>
          <PieChart
            data={[
              {
                title: pieData[0].city + " " + pieData[0].state,
                value: pieData[0].people.male,
                color: "#E38627",
              },
              {
                title: pieData[1].city + " " + pieData[1].state,
                value: pieData[1].people.male,
                color: "#C13C37",
              },
              {
                title: pieData[2].city + " " + pieData[2].state,
                value: pieData[2].people.male,
                color: "#6A2135",
              },
            ]}
          />
        </div>
        <div className="pie-chart">
          <p style={{ color: "#fff", margin: "10px" }}>Female Citizen</p>
          <PieChart
            data={[
              {
                title: pieData[0].city + " " + pieData[0].state,
                value: pieData[0].people.female,
                color: "#E38627",
              },
              {
                title: pieData[1].city + " " + pieData[1].state,
                value: pieData[1].people.female,
                color: "#C13C37",
              },
              {
                title: pieData[2].city + " " + pieData[2].state,
                value: pieData[2].people.female,
                color: "#6A2135",
              },
            ]}
          />
        </div>
        <div className="pie-chart">
          <p style={{ color: "#fff", margin: "10px" }}>Total Citizen</p>
          <PieChart
            data={[
              {
                title: pieData[0].city + " " + pieData[0].state,
                value: pieData[0].people.male + pieData[0].people.female,
                color: "#E38627",
              },
              {
                title: pieData[1].city + " " + pieData[1].state,
                value: pieData[1].people.male + pieData[1].people.female,
                color: "#C13C37",
              },
              {
                title: pieData[2].city + " " + pieData[2].state,
                value: pieData[2].people.male + pieData[2].people.female,
                color: "#6A2135",
              },
            ]}
          />
        </div>
        ;
      </div>

      <div className="barchart">
        <h2 style={{ color: "#fff" }}>Task 3: Bar-Chart</h2>
        <Barchart />
      </div>
    </>
  );
}
