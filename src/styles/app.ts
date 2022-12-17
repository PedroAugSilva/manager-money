import styled from "styled-components";

export const Main = styled.main`
  overflow: hidden;
  align-items: center;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 719px){
    overflow-y: auto;
    
  }
  aside {
    height: 100vh;
    width: 250px;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
    border-right: 1px solid ${({ theme }) => theme.colors.fontSecundary};

    @media screen and (max-width: 1200px) and (min-width: 901px) {
      width: 180px;
    }
    @media screen and (max-width: 900px){
      display: none;
    }

  }
  section {
    width: calc(100vw - 250px);
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100vh;
    padding: 3rem;
    
    @media screen and (max-width: 1200px) and (min-width: 901px) {
      width: calc(100vw - 180px);
      padding: 1rem;
    }

    @media screen and (max-width: 900px){
      width: 100vw;
      padding: 1rem;
      
    }
    .new-transaction{
      width: 100%;
      padding-bottom: 10px;
      border-bottom: 1px solid #b4b4b4;
    }
    .button-new-transaction{
      width: 150px;
      height: 30px;
      border-radius: 5px;
      padding: 0px 10px;
      gap: 5px;
      border: none;
      outline: none;
      align-items: center;
      display: flex;
      flex-direction: row;
      font-size: 10pt;
      background: #75f;
      color: #fff;
      cursor: pointer;
    }
    .transactions {
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.backgroundSecundary};
      box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2),
        0px 10px 10px 5px rgba(0, 0, 0, 0.15);
      border-radius: 10px;
      align-items: center;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      overflow: hidden;
      position: relative;
      @media screen and (max-width: 719px){
        height: 100%;
        box-shadow: none;
    }
    }
    .transactions-itens {
      width: 100%;
      max-height: 85%;
      gap: 5px;
      border-radius: 10px;
      align-items: center;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      overflow: auto;
      @media screen and (max-width: 719px) {
        padding: 1rem 0px;
        
      }
      ::-webkit-scrollbar {
        width: 5px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: #b4b4b4;
        border-radius: 5px;
      }
      
  }
}
`
