import React, { useState } from "react";
import { Chart, Lines, Selectors, Container } from "./style";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import useTransaction from "../../hooks/useTransactions";

type chartTypes = {
  id: number;
  color: string;
  data: number;
};

const LineChart = () => {

  const [actionChart, setActionChart] = useState("entry");
  const { transaction } = useTransaction();

  const searchDate = (value: number, action: string) => {

    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    let dayOfChart = day - value;

    let data =
      day >= 2
        ? transaction.filter(
            (tr) => tr.date === `${dayOfChart}/${month}/${year}`
          )
        : transaction.filter((tr) => tr.date === `${day}/${month}/${year}`);

    return data.filter((data) => data.action === action).length;
  };


  const chartData: chartTypes[] = [
    {
      id: 0,
      color: "#fcba03",
      data: searchDate(6, "entry"),
    },
    {
      id: 1,
      color: "#334096",
      data: searchDate(5, actionChart),
    },
    {
      id: 2,
      color: "#56b334",
      data: searchDate(4, actionChart),
    },
    {
      id: 3,
      color: "#fcba03",
      data: searchDate(3, actionChart),
    },
    {
      id: 4,
      color: "#334096",
      data: searchDate(2, actionChart),
    },
    {
      id: 5,
      color: "#56b334",
      data: searchDate(1, actionChart),
    },
    {
      id: 6,
      color: "#fcba03",
      data: searchDate(0, actionChart),
    },
  ];


  const handleSelectAction = (e: React.ChangeEvent<HTMLInputElement>) => {
    const radio = e.target;
    setActionChart(radio.value);
  };
  return (
    <Container>
      <Chart>
        <span className="limit-chart">20 -</span>
        <span className="limit-chart">10 -</span>
        <span className="limit-chart">0 -</span>
        {chartData.map((chart) => {
          const { id, color, data } = chart;
          const percent = (100 / 20) * data;
          return (
            <Lines color={color} key={id}>
              <div className="indicator" style={{ height: percent + "%" }}>
                <span className="counter">{data}</span>
              </div>
            </Lines>
          );
        })}
      </Chart>
      <Selectors>
        <label htmlFor="entry" className="selector-button entry" aria-label="Entry">
          <BiUpArrow />
        </label>
        <input
          type="radio"
          name="radio"
          id="entry"
          value="entry"
          onChange={handleSelectAction}
        />
        <label htmlFor="exit" className="selector-button exit" aria-label="Exit">
          <BiDownArrow />
        </label>
        <input
          type="radio"
          name="radio"
          id="exit"
          value="exit"
          onChange={handleSelectAction}
        />
        <div className="indicator"></div>
      </Selectors>
      
    </Container>
  );
};

export default LineChart;
