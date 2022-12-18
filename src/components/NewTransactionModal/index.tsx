import React from "react";
import { Modal } from "./style";
import { BsX } from "react-icons/bs";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import useTransaction from "../../hooks/useTransactions";

const NewTransactionModal = ({ setModal }: any) => {
  const { newTransaction } = useTransaction();
  const { register, handleSubmit } = useForm();

  const handleTransaction = (data: any) => {
    const transactionValues = {
      description: data.description,
      money: Number(data.money),
      action: data.action,
    };
    newTransaction(transactionValues);
    setModal(false);
  };
  return (
    <Modal
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.section
        layout
        initial={{ transform: "scale(0)" }}
        animate={{ transform: "scale(1)" }}
        exit={{ transform: "scale(0)" }}
      >
        <h1>New transaction</h1>
        <button className="hide-modal" onClick={() => setModal(false)}>
          <BsX />
        </button>
        <form onSubmit={handleSubmit(handleTransaction)}>
          <input type="text" placeholder="description..." {...register("description")} />
          <input type="number" placeholder="Money..." {...register("money")} />
          <div className="radio-area">
            <input
              type="radio"
              {...register("action")}
              id="entry"
              value="entry"
            />
            <label htmlFor="entry" className="label"></label>
            <p>Entry</p>

            <input
              type="radio"
              {...register("action")}
              id="exit"
              value="exit"
            />
            <label htmlFor="exit" className="label"></label>
            <p>Exit</p>
          </div>
          <button className="register-button">Register</button>
        </form>
      </motion.section>
    </Modal>
  );
};

export default NewTransactionModal;
