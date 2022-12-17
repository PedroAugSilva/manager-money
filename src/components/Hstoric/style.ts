import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: max-content;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 15px;
  .texts{
    align-items: flex-start;
    display: flex;
    flex-direction: column;
  }
  .value{
    color: ${({ theme }) => theme.colors.fontSecundary};
  }
  figure {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.backgroundSecundary};
    align-items: center;
    justify-content: center;
    font-size: 16pt;
    display: flex;
    color: #aaa3b5;
  }
`;
