import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import { CountdownContext } from '../contexts/CountdownContexts';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const { seconds, minutes, hasFinished, isActive, startCountdown, resetCountdown } = useContext(CountdownContext);

    const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRigth] = String(seconds).padStart(2, '0').split('')


    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRigth}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRigth}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}>
                    Ciclo Encerrado
                </button>
            ) : (
                    <>
                        {isActive ? (
                            <button
                                onClick={resetCountdown}
                                type='button'
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                                Abandonar ciclo
                            </button>
                        ) : (
                                <button
                                    onClick={startCountdown}
                                    type='button'
                                    className={styles.countdownButton}>
                                    Iniciar um ciclo
                                </button>
                            )}
                    </>
                )}






        </div>
    )
}