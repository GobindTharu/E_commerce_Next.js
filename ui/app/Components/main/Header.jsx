"use client";

import { useState, useEffect } from "react";
import { Discount } from "../sub/Discount";

const Header = () => {
  const [targetDate, setTargetDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const getOrSetTargetDate = () => {
      const storedDate = window.localStorage.getItem("offerTargetDate");

      if (storedDate) {
        return new Date(storedDate);
      } else {
        const newTarget = new Date();
        newTarget.setDate(newTarget.getDate() + 24); // 24 days from now
        localStorage.setItem("offerTargetDate", newTarget.toISOString());
        return newTarget;
      }
    };

    const date = getOrSetTargetDate();
    setTargetDate(date);
  }, []);

  useEffect(() => {
    if (!targetDate) return;

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

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!targetDate) return null; // Wait for targetDate to be set

  return (
    <header className="w-full">
      <div className="relative bg-blue-100 text-gray-900 text-center py-1 md:py-4 text-sm font-semibold flex flex-wrap justify-center items-center gap-4 px-4">
        <span>HURRY! Offer Valid for</span>
        <div className="flex space-x-1">
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
        <div className="flex space-x-1">
          <span>
            Limited Offer! 16% Discount for the First 100 Random Visitors on Our
            Website
          </span>
          <Discount />
        </div>
      </div>
    </header>
  );
};

export default Header;
