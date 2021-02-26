import Head from 'next/head';
import { GetServerSideProps } from 'next';
import React  from "react";
import { ChallengeBox } from '../components/ChallengeBox';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CountdownContext, CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/pages/Home.module.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps{
  level: number;
  currentExperience: number;
  challengeCompleted: number;
}

export default function Home(props: HomeProps) {

  return (

    <ChallengesProvider 
    level={props.level} 
    currentExperience={props.currentExperience} 
    challengeCompleted={props.challengeCompleted}
    >
      <div className={styles.container}>
      
        <Head>
          <title>Move.It</title>
        </Head>

        
        <ExperienceBar/>


        <CountdownProvider>
            <section>
              <div>
              
                <Profile />
              
                <CompleteChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
        </CountdownProvider>

    
      </div> 
    </ChallengesProvider>
   
   

  
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {


  const { level, currentExperience, challengeCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeCompleted: Number(challengeCompleted)
    }
  }
}