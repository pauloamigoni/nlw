import styles from '../styles/components/ExperienceBar.module.css';
import { ImStarEmpty, ImStarFull, ImStarHalf } from 'react-icons/im';
import { BiWalk} from 'react-icons/bi';
import { CgGym } from 'react-icons/cg';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';



export function ExperienceBar(){

    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return(
        <header className={styles.experienceBar}>
            <span>0 <ImStarEmpty /></span>
            <div>
                
                <span className={styles.currentExperienceTop} 
                style={{ left: `${percentToNextLevel}%` }}>
                <BiWalk size={28}/></span>
                
                
                <div style={{ width: `${percentToNextLevel}%`}} />
                
                
                <span className={styles.currentExperience} 
                style={{ left: `${percentToNextLevel}%` }}>
                {currentExperience} <ImStarHalf /></span>


            </div>
            <span>{experienceToNextLevel} <ImStarFull /></span>

        </header>
    )
}