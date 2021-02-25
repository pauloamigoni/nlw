import React  from "react";
import { ThemeProvider , DefaultTheme } from "styled-components";
import usePersistedStates from "../utils/usePersistedStates";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import Header from "../components/Header";
import GlobalStyle from "../styles/theme";
import '../styles/global.css';

import {ChallengesContext, ChallengesProvider} from '../contexts/ChallengesContext';



function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedStates<DefaultTheme>('theme',light);

  const toggleTheme = () => {
    setTheme(theme.title ==='light' ? dark : light);
  }

  return (
   
    <ThemeProvider theme={theme}>

    <GlobalStyle />
            <ChallengesProvider>
             
                <Component {...pageProps} />
            </ChallengesProvider>
          <Header toggleTheme={toggleTheme}/>
    </ThemeProvider>  
 
  )
}

export default MyApp
