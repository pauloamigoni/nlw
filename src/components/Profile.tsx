import styles from '../styles/components/Profile.module.css';
import Clock from '../lib/clock/clock';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile() {

const { level} = useContext(ChallengesContext);


    return(
        <div className={styles.profileContainer} >
            <img src="https://github.com/pauloamigoni.png" alt="Paulo Amigoni" />
            <div>
             <Clock />
                <strong>Paulo Amigoni</strong>
              
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}