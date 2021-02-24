import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface Challenge{
 type: 'body' | 'eye';
 description: string;
 amount: number;
 }

interface ChallengesContextData{
            level: number;
            levelUp: () => void;
            currentExperience: number;
            challengeCompleted: number;
            activeChallenge: Challenge;
            startNewChallenge: () => void;
            resetChallenge: () => void;
            experienceToNextLevel: number;
}

interface ChallengesProviderProps{
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengeCompleted, setChallengeCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1 ) * 4, 2);


    
    function levelUp() {
        setLevel(level +1);
    }

    function startNewChallenge(){
       const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
       const challenge = challenges[randomChallengeIndex];
       setActiveChallenge(challenge);
    }


    function resetChallenge(){
        setActiveChallenge(null);

    }

    return (
        <ChallengesContext.Provider 
        value={{
            level,
            levelUp,
            currentExperience,
            challengeCompleted,
            startNewChallenge,
            activeChallenge,
            resetChallenge,
            experienceToNextLevel
            }}>
            {children}
        </ChallengesContext.Provider>
    )
}