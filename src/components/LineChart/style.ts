import styled from "styled-components";



export const Chart = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1rem;
  border-radius: 10px;
  background-color: #111;
  width: 85%;
  height: 221px;
  position: relative;
  @media screen and (max-width: 719px){
     width: 80%;
  }
  .limit-chart {
    position: absolute;
    right: 5px;
    font-size: 8pt;
    color: #fff;
    font-weight: 100;
    z-index: 1;
    :nth-child(1) {
      top: 10px;
    }
    :nth-child(3) {
      bottom: 10px;
    }
  }
`;
export const Lines = styled.div`
  width: 3px;
  height: 100%;
  background-color: #222;
  border-radius: 5px;
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;

  .indicator {
    position: absolute;
    width: 20px;
    height: 0px;
    bottom: 0;
    background-color: ${({ color }) => color};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    display: flex;
    transition: 0.3s ease-in-out;
  }
  .counter {
    position: absolute;
    top: -20px;
    color: #fff;
  }
`;
export const Selectors = styled.div`
  width: 50px;
  height: 221px;
  position: relative;
  margin-left: -14px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  [aria-label] {
    position: relative;
  }

  [aria-label]::after {
    transition: 0.1s ease-in-out;
    content: attr(aria-label);
    opacity: 0;
    position: absolute;
    bottom: 10px;
    right: -57px;
    z-index: 2;
    pointer-events: none;
    width: 50px;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 8px 0px;
    text-decoration: none;
    font-size: 11pt;
    color: #fff;
    border-radius: 5px;
    background-color: #333;
  }

  [aria-label]:hover::after {
    opacity: 1;
  }
  input {
    display: none;
  }
  input:nth-of-type(1):checked + .indicator {
    top: 51px;
  }
  input:nth-of-type(2):checked + .indicator {
    top: 111px;
  }

  .indicator {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 0px 50% 50% 0px;
    background-color: #111;
    top: 51px;
    transition: 0.4s ease-in-out;
    ::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      box-shadow: -10px 10px 0px #111;
      top: -20px;
    }
    ::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      box-shadow: -10px -10px 0px #111;
      bottom: -20px;
    }
  }

  .selector-button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    outline: none;
    font-size: 20pt;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    z-index: 1;
  }
  .entry {
    background-color: #54f542;
  }
  .exit {
    background-color: #fa2020;
  }
  @media screen and (max-width: 719px){
     
    }
`;
export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    width: 50%;
    gap: 1rem;
    position: relative;

  @media screen and (max-width: 1200px){
    display: none;
  }
`