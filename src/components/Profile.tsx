import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/77869200?s=460&v=4" alt="Bruno Domingues"/>
            <div>
                <strong>Bruno Domingues da Silva</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level { level }
                </p>
            </div>
        </div>
    )
}