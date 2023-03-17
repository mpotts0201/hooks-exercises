import { useState, useEffect } from 'react';

const TimerExample = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isPaused, setIsPaused] = useState<boolean>(true);
    const [time, setTime] = useState<number>(0);

    useEffect(() => {
        let interval: any = null;

        if (isActive && !isPaused) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };
      
    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };
      
    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    return (
        <div style={styles.timerContainer}>
            <div>
                <span className="digits">
                    {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                </span>
                <span className="digits">
                    {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
                </span>
                <span className="digits mili-sec">
                    {("0" + ((time / 10) % 100)).slice(-2)}
                </span>
            </div>
            <div>
                {isActive ? (
                    <>
                        <button onClick={handlePauseResume}>{isPaused ? 'Resume' : 'Pause'}</button>
                        <button onClick={handleReset}>Reset</button>
                    </>
                ) : <button onClick={handleStart}>Start</button>}
            </div>
        </div>
    );
};

const styles = {
    timerContainer: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
};

export default TimerExample;
