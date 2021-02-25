import styles from '../styles/components/Profile.module.css';
import Clock from '../lib/clock/clock';

export function Profile() {
    return(
        <div className={styles.profileContainer} >
            <img src="https://github.com/pauloamigoni.png" alt="Paulo Amigoni" />
            <div>
             <Clock />
                <strong>Paulo Amigoni</strong>
              
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}