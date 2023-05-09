import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const eventDate = new Date('2023-05-11T00:00:00'); // Replace with your event date

  const calculateTimeLeft = () => {
    const currentTime = new Date().getTime();
    const difference = eventDate.getTime() - currentTime;

    if (difference <= 0) {
      return {
        years: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 365);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      years,
      days,
      hours,
      minutes,
      seconds
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (value) => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div>
      <h2>Countdown Timer</h2>
      <div>
        <h3>Format: DD:MM:YY</h3>
        <p>
          {`${formatTime(timeLeft.days)}:${formatTime(
            timeLeft.years % 365
          )}:${formatTime(Math.floor(timeLeft.years / 365))}`}
        </p>
      </div>
      <div>
        <h3>Format: DD:HH:MM:SS</h3>
        <p>
          {`${formatTime(timeLeft.days)}:${formatTime(
            timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`}
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;