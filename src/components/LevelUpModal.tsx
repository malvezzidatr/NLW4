import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
    const { level, handleCloseModal } = useContext(ChallengesContext);

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabens</strong>
                <p>Você alcançou um novo level</p>
                <button onClick={handleCloseModal} type='button'>
                    <img src='/icons/close.svg' alt='fechar modal' />
                </button>
            </div>

        </div>
    )
}