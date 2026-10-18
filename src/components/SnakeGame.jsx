import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy } from 'lucide-react';

const GRID_SIZE = 15;
const INITIAL_SNAKE = [{ x: 7, y: 7 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const SPEED = 120;

export default function SnakeGame({ onClose }) {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState({ x: 10, y: 10 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    parseInt(localStorage.getItem('snakeHighScore') || '0')
  );

  const spawnFood = useCallback((currentSnake) => {
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      // eslint-disable-next-line no-loop-func
      const isOnSnake = currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y);
      if (!isOnSnake) break;
    }
    setFood(newFood);
  }, []);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setGameOver(false);
    setScore(0);
    spawnFood(INITIAL_SNAKE);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Prevent default scrolling for arrow keys
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
      }
      
      switch (e.key) {
        case 'ArrowUp':
          if (direction.y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x !== -1) setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  useEffect(() => {
    if (gameOver) return;

    const moveSnake = () => {
      setSnake((prevSnake) => {
        const head = prevSnake[0];
        const newHead = { x: head.x + direction.x, y: head.y + direction.y };

        // Check wall collision
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setGameOver(true);
          return prevSnake;
        }

        // Check self collision
        if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Check food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(s => {
            const newScore = s + 10;
            if (newScore > highScore) {
              setHighScore(newScore);
              localStorage.setItem('snakeHighScore', newScore.toString());
            }
            return newScore;
          });
          spawnFood(newSnake);
        } else {
          newSnake.pop(); // Remove tail if no food eaten
        }

        return newSnake;
      });
    };

    const intervalId = setInterval(moveSnake, SPEED);
    return () => clearInterval(intervalId);
  }, [direction, food, gameOver, highScore, spawnFood]);

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bg/85 backdrop-blur-md"
      >
        <div className="relative w-full max-w-sm bg-bg border border-line p-6 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.4)]">
          
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="font-serif text-3xl leading-none">Vann <em>Snake</em></h3>
              <p className="text-xs text-muted mt-2 tabular-nums">Score {score}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end text-muted">
                <Trophy className="w-4 h-4 mb-1" />
                <span className="text-[10px] tabular-nums">{highScore}</span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:opacity-60 transition-opacity"
                aria-label="Close game"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Game Board */}
          <div 
            className="w-full aspect-square border border-line relative overflow-hidden"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
              gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`
            }}
          >
            {/* Food */}
            <div 
              className="bg-fg rounded-full w-1/2 h-1/2 place-self-center"
              style={{ gridColumn: food.x + 1, gridRow: food.y + 1 }}
            />
            
            {/* Snake */}
            {snake.map((segment, i) => (
              <div 
                key={`${segment.x}-${segment.y}-${i}`}
                className={`w-full h-full bg-fg ${i === 0 ? '' : 'opacity-60 scale-90'}`}
                style={{ gridColumn: segment.x + 1, gridRow: segment.y + 1 }}
              />
            ))}
            
            {/* Game Over Overlay */}
            {gameOver && (
              <div className="absolute inset-0 bg-bg/90 backdrop-blur-sm flex flex-col items-center justify-center">
                <h4 className="font-serif italic text-4xl mb-2">Game over.</h4>
                <p className="text-sm text-muted mb-6 tabular-nums">Final score {score}</p>
                <button 
                  onClick={resetGame}
                  className="link font-serif italic text-xl"
                >
                  Play again →
                </button>
              </div>
            )}
          </div>
          
          <p className="text-[10px] text-center text-muted mt-6 uppercase tracking-[0.2em]">
            Use arrow keys to move
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
