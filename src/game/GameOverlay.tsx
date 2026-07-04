import { useEffect, useRef, useState } from 'react';
import './GameOverlay.css';
import { SpaceGame } from './SpaceGame';

interface GameOverlayProps {
    onClose: () => void;
}

const GameOverlay = ({ onClose }: GameOverlayProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [gameOver, setGameOver] = useState(false);
    const [gameClear, setGameClear] = useState(false);
    const [time, setTime] = useState(0);
    const gameRef = useRef<SpaceGame | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        gameRef.current = new SpaceGame(canvasRef.current, {
            onGameOver: () => setGameOver(true),
            onGameClear: (time) => {
                setGameClear(true);
                setTime(time);
            },
        });

        return () => {
            if (gameRef.current) {
                gameRef.current.dispose();
            }
        };
    }, []);

    const handleRestart = () => {
        setGameOver(false);
        setGameClear(false);
        if (gameRef.current) {
            gameRef.current.restart();
        }
    };

    return (
        <div className="game-overlay">
            <canvas ref={canvasRef} className="game-canvas" />
            
            <button className="game-close-btn" onClick={onClose}>
                ✕
            </button>

            {(gameOver || gameClear) && (
                <div className="game-modal">
                    <h2>{gameClear ? 'MISSION CLEAR!' : 'GAME OVER'}</h2>
                    {gameClear && <p>Record: {time.toFixed(2)}s</p>}
                    <button className="game-restart-btn" onClick={handleRestart}>
                        RESTART
                    </button>
                </div>
            )}
        </div>
    );
};

export default GameOverlay;
