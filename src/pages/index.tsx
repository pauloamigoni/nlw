import Head from 'next/head';
import React  from "react";
import { ThemeProvider , DefaultTheme } from "styled-components";
import usePersistedStates from "../utils/usePersistedStates";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import  Header  from "../components/Header";
import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css';

export default function Home() {

    const [theme, setTheme] = usePersistedStates<DefaultTheme>('theme',light);

  const toggleTheme = () => {
    setTheme(theme.title ==='light' ? dark : light);
  }


  return (
    <ThemeProvider theme={theme}>
    <div className={styles.container}>
      <Head>
         <title>Move.It</title>
      </Head>
      <ExperienceBar/>

      <section>
        <div>
          <Profile />
          <CompleteChallenges />
          <Countdown />
        </div>
        <div></div>
      </section>

     
    </div> 
    <Header toggleTheme={toggleTheme}/>
    </ThemeProvider>

  
  )
}
