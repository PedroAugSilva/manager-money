import styled from "styled-components";
import { motion } from "framer-motion";

export const Modal = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  display: flex;
  justify-content: center;
  z-index: 9;
  section {
    width: 300px;
    height: max-content;
    border-radius: 10px;
    background-color: #fff;
    padding: 1rem;
    gap: 10px;
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    form{
      overflow: hidden;
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    h1 {
      color: #333;
    }

    .hide-modal{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        display: flex;
        font-size: 14pt;
        position: absolute;
        top: 1rem;
        right: 1rem;
        border: 0;
        outline: none;
        background: #333;
        color: #fff;
        cursor: pointer;
    }

    input[type="text"],
    input[type="number"] {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      border: 1px solid #888;
      outline: none;
      padding: 0px 10px;
      font-size: 14pt;
    }
    .register-button {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      border: 1px solid #333;
      color: #333;
      font-size: 14pt;
      transition: 0.2s ease-in-out;
      background: none;
      margin-top: 1rem;
      cursor: pointer;
      :hover {
        background-color: #333;
        color: #fff;
      }
    }
    .radio-area {
      width: 100%;
      height: max-content;
      align-items: center;
      display: flex;
      flex-direction: row;
      gap: 2px;
      input[type="radio"] {
        display: none;
      }
      input:checked + .label::after {
        opacity: 1;
      }
      .label + p{
        margin-right: 1rem;
      }
      .label {
        align-items: center;
        justify-content: center;
        display: flex;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid #333;
        cursor: pointer;
      }
      .label::after {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #333;
        opacity: 0;
        transition: .2s ease-in-out;
      }
    }
  }
`;
