import styled from "styled-components";

export const Preview = styled.header`
    width: 100%;
    height: 450px;
    border-radius: 10px;
    align-items: center;
    display: flex;
    flex-direction: row;
    background-image: linear-gradient(to right, #BFB0C5 5%,  #fff  60%);
    padding: 1rem 2.5rem;
    justify-content: space-around;
    @media screen and (min-width: 1800px){
        padding: 1rem 150px;
        gap: 200px;
    }
    @media screen and (max-width: 719px){
      height: max-content;
      flex-direction: column;
      justify-content: center;
      gap: 3rem;
      padding: 1rem;
    }
    .balance{
        width: 50%;
        align-items: center;
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 719px){
            width: 100%;
        }
        img{
            height: 40px;
            width: 100%;
            filter: opacity(30%);
        }
        h1 span{
            font-size: 22pt;
            margin-top: 14px;
            @media screen and (max-width: 719px) {
                margin-top: 0px;
                font-size: 14pt;
            }
        }
        h1{
            font-size: 50pt;
            flex-direction: row;
            align-items: flex-start;
            display: flex;
            gap: 2rem;
            @media screen and (max-width: 719px) {
                font-size: 30pt;
                gap: 10px;
            }
        }
    }
    
    .balance-data{
        align-items: center;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
        span{
            align-items: flex-start;
            display: flex;
            flex-direction: column;
        }
        p{
            color: #555;
        }
    }
`