import useTransaction from "../hooks/useTransactions";

const useBalance = () => {

  const { transaction } = useTransaction();
  const totalBalance = transaction.length;

  const entry = transaction.filter((tr) => tr.action === "entry");
  const exit = transaction.filter((tr) => tr.action === "exit");

  let totalExit = 0;
  let totalEntry = 0;
  let lastTransaction =
    transaction[0] === undefined
      ? "loading"
      : transaction
          .reverse()[0]
          .money.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          });

  entry.map((balance) => {
    totalEntry += balance.money;
  });
  exit.map((balance) => {
    totalExit += balance.money;
  });
  let balance = totalEntry - totalExit;


  return {
    lastTransaction: lastTransaction,
    totalEntry: totalEntry,
    totalExit: totalExit,
    balance: balance,
    totalTransaction: totalBalance
  }
  
};
export default useBalance
