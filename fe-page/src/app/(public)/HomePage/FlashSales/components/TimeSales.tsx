"use client";
import React from "react";

interface ITime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimeSales = () => {
  const targetDate = new Date("2024-08-28T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = React.useState<ITime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = (): ITime => {
    const now = new Date().getTime();

    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex gap-4 items-center">
      <div className="flex flex-col">
        <span className="font-sans font-medium text-sm">Days</span>
        <span className="font-sans font-bold text-3xl">
          {timeLeft.days.toString().padStart(2, "0")}
        </span>
      </div>

      <span className="text-[#e07679] font-sans text-4xl">:</span>
      <div className="flex flex-col">
        <span className="font-sans font-medium text-sm">Hours</span>
        <span className="font-sans font-bold text-3xl">
          {timeLeft.hours.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-[#e07679] font-sans text-4xl">:</span>
      <div className="flex flex-col">
        <span className="font-sans font-medium text-sm">Minutes</span>
        <span className="font-sans font-bold text-3xl">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-[#e07679] font-sans text-4xl">:</span>
      <div className="flex flex-col">
        <span className="font-sans font-medium text-sm">Seconds</span>
        <span className="font-sans font-bold text-3xl">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default TimeSales;
