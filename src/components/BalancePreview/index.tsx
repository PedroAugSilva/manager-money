import React from "react";
import { Preview } from "./style";
import icon from "../../assets/ZigZagLine.png";
import LineChart from "../LineChart";
import useBalance from "../../utils/useBalance";

const BalancePreview = () => {
  const balance = useBalance();

  return (
    <Preview>
      <div className="balance">
        <p>Total balance</p>
        <h1>
          <span>R$</span>{" "}
          {balance.balance.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
          })}
        </h1>
        <img src={icon} alt="icon" />
        <div className="balance-data">
          <span>
            Entry
            <p>
              {balance.totalEntry.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </span>
          <span>
            Exit
            <p>
              -{" "}
              {balance.totalExit.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </span>
          <span>
            Last transaction
            <p>{balance.lastTransaction}</p>
          </span>
        </div>
      </div>
      <LineChart />
    </Preview>
  );
};

export default BalancePreview;
