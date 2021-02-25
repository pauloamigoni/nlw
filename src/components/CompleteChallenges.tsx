import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompleteChallenges.module.css';


import { GrAchievement } from 'react-icons/gr'



export function CompleteChallenges(){

const { challengeCompleted } = useContext(ChallengesContext);

    return(
    <div className={styles.completeChallengesContainer} >
        <span> <GrAchievement /> DESAFIOS COMPLETOS</span>
        <span>{challengeCompleted}</span>
    </div>
    )
}