import React from "react";
import { Container } from "./style";
import { IoWallet } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import useBalance from "../../utils/useBalance";
interface props {
  subject: string;
  
}
const Historic: React.FC<props> = ({ subject }) => {
  const balance = useBalance();
  const valueParsed =
    subject === "Wallet"
      ? balance.balance.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
      : balance.totalTransaction;

  return (
    <Container>
      <figure>{subject === "Wallet" ? <IoWallet /> : <GrTransaction />}</figure>
      <div className="texts">
        <span className="title">{subject}</span>
        <span className="value">{valueParsed}</span>
      </div>
    </Container>
  );
};

export default Historic;
