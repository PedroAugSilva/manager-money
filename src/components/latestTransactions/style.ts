import styled from "styled-components";

export const Transaction = styled.li`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding: 0px 1rem;
  list-style: none;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid rgba(0,0,0,0);
  transition: .1s ease-in-out;
  flex: none;
  @media screen and (max-width: 719px) {
     padding: 0px 5px;
  }
  :hover{
    border-color: #b4b4b4;
  }
  div {
    width: max-content;
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    :last-child{
        color: #888;
    }
  }
  
  .options {
    align-items: center;
    justify-content: center;
    display: flex;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: #fff;
    color: #000;
    width: 30px;
    height: 30px;
    font-size: 20pt;
    cursor: pointer;
    transition: .2s ease-in-out;
    :hover {
      background-color: #000;
      color: #fff;
    }
  }
`;
