import React, { useEffect, useState } from "react";
import "./Timer.css";

const MyTime = () => {
    const [time, setTime] = useState(172800); // Set initial time to 3600 seconds (1 hour)

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        // Cleanup function to clear the timer when the component unmounts
        return () => clearInterval(timer);
    }, []);

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return (
        <div className="categories__deal__countdown__timer">
            <div className="cd-item">
                <span>{`${hours}`.padStart(2, '0')}:</span>
                <span>{`${minutes}`.padStart(2, '0')}:</span>
                <span>{`${seconds}`.padStart(2, '0')}</span>
            </div>
        </div>
    );
};

export default MyTime;
