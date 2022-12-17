
import 'styled-components';
declare module 'styled-components'{
    export interface DefaultTheme {
        title: string;
        colors:{
            backgroundPrimary: string;
            backgroundSecundary: string;
            fontPrimary: string;
        fontSecundary: string
        }
    }
}