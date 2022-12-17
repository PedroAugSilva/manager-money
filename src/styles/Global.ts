import { createGlobalStyle } from "styled-components";

 const Global = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Karla', sans-serif;
    }
    body{
        background-color: ${({theme}) => theme.colors.backgroundPrimary};
        ::-webkit-scrollbar {
        width: 5px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: #b4b4b4;
        border-radius: 5px;
      }
    }
 `;
 export default Global;