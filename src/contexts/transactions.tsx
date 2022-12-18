import React, { createContext, ReactNode, useState, useEffect } from "react";

type ProviderType = {
  children?: ReactNode;
};
interface transactionsType {
  description: string;
  money:  number;
  action: string;
  date: string;
}
interface transactionContextType {
  transaction: transactionsType[];
  newTransaction: any;
  getTransaction: any;
}
const initialState = {
  transaction: [],
  newTransaction: () => {},
  getTransaction: () => {},
};

export const TransactionContext =
  createContext<transactionContextType>(initialState);

export const TransactionsProvider: React.FC<ProviderType> = ({ children }) => {

  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    const hasStorage = localStorage.getItem("transactions");
    if (hasStorage) {
      setTransaction(JSON.parse(hasStorage));
    }
  }, []);

  const newTransaction = ({ description, money, action }: transactionsType) => {
    const hasStorage = localStorage.getItem("transactions");
    
    
    const dateToday = new Date().toLocaleDateString()
    const newtransaction = {
      description: description,
      money: money,
      action: action,
      date: dateToday,
    };
    if (hasStorage) {
      const latestTrnasaction = JSON.parse(hasStorage);
      localStorage.setItem(
        "transactions",
        JSON.stringify([...latestTrnasaction, newtransaction])
      );
    } else {
      localStorage.setItem("transactions", JSON.stringify([newtransaction]));
    }
    getTransaction();
  };
  const getTransaction = () => {
    const hasStorage = localStorage.getItem("transactions");
    if (hasStorage) {
      const storage = JSON.parse(hasStorage);
      setTransaction(storage);
    }
  };

  return (
    <TransactionContext.Provider
      value={{  transaction, newTransaction, getTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
