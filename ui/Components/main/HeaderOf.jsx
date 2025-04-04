"use client";
import { useState, useEffect } from "react";

const HeaderOF = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getOrSetTargetDate = () => {
    const storedDate = localStorage.getItem("offerTargetDate");

    if (storedDate) {
      return new Date(storedDate);
    } else {
      const newTarget = new Date();
      newTarget.setDate(newTarget.getDate() + 24); // 24 days from now
      localStorage.setItem("offerTargetDate", newTarget.toISOString());
      return newTarget;
    }
  };

  const [targetDate, setTargetDate] = useState(getOrSetTargetDate());

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <header className="w-full">
      <div className="relative bg-blue-100 text-gray-900 text-center py-5 text-sm font-semibold flex flex-wrap justify-center items-center gap-4 px-4">
        <span>HURRY! Offer Valid for</span>
        <div className="flex space-x-2">
          <span className="bg-gray-300 px-2 py-1 rounded">
            {timeLeft.days} Days
          </span>
          <span className="bg-gray-300 px-2 py-1 rounded">
            {timeLeft.hours} Hours
          </span>
          <span className="bg-gray-300 px-2 py-1 rounded">
            {timeLeft.minutes} Minutes
          </span>
          <span className="bg-gray-300 px-2 py-1 rounded">
            {timeLeft.seconds} Seconds
          </span>
        </div>
        <span>
          Limited Offer! 16% Discount for the First 100 Random Visitors on Our Website
        </span>
        <button className="bg-blue-500 text-white px-3 py-1 ml-4 rounded">
          Learn more
        </button>
      </div>
    </header>
  );
};

export default HeaderOF;
