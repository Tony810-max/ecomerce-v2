"use client";

import React from "react";
import { Progress } from "./ui/progress";

interface IProgress {
  onSetLoading: (value: boolean) => void;
}

const ProgressManager: React.FC<IProgress> = ({ onSetLoading }) => {
  const [progress, setProgress] = React.useState(20);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(80);
    }, 200);

    const timers = setTimeout(() => {
      setProgress(99);
    }, 500);

    const timer2 = setTimeout(() => {
      onSetLoading(false);
    }, 800);

    return () => {
      clearTimeout(timer);
      clearTimeout(timers);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Progress value={progress} className="w-[60%] " />
    </div>
  );
};

export default ProgressManager;
