import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Transaction } from "./style";
import useTransaction from "../../hooks/useTransactions";

const LatestTransactions: React.FC = () => {
  const { transaction } = useTransaction();

  return (
    <>
      {transaction.map((transaction, index) => {
        const money = `${
          transaction.action === "entry" ? "+" : "-"
        } ${transaction.money.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}`;

        const date =
          transaction.date === new Date().toLocaleDateString()
            ? "Today"
            : transaction.date;
        return (
          <Transaction key={index}>
            <div>
              <span className="finality">{transaction.description}</span>
            </div>
            <div>
              <span className="value">{money}</span>
              <span className="date">{date}</span>
              <button className="options">
                <BiDotsHorizontalRounded />
              </button>
            </div>
          </Transaction>
        );
      })}
    </>
  );
};
export default LatestTransactions;
