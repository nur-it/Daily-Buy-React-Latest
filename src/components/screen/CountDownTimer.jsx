import React, { useEffect, useState, useCallback } from "react";

const CountDownTimer = ({ hoursMinSecs }) => {
  const { days = 0, hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);

  const reset = useCallback(() => {
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
  }, [hours, minutes, seconds]);

  const tick = useCallback(() => {
    if (days === 0 && hrs === 0 && mins === 0 && secs === 0) reset();
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  }, [days, hrs, mins, secs, reset]);

  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    return () => clearInterval(timerId);
  }, [tick]);

  return (
    <div className="my-6 md:my-10 lg:my-12 space-x-2 md:space-x-4 lg:space-x-8">
      {["Day", "Hours", "Minutes", "Seconds"].map((unit, index) => (
        <div key={index} className="text-center inline-block">
          <p className="bg-white text-primary-500 shadow-custom p-8 lg:p-4 text-xl h-[23px] md:h-[50px] lg:h-[72px] w-[26px] md:w-[52px] lg:w-[82px] rounded-[6px] lg:rounded-[8px] flex items-center justify-center font-bold text-[10px] md:text-[25px] lg:text-[32px]">
            {index === 0
              ? days.toString().padStart(2, "0")
              : index === 1
              ? hrs.toString().padStart(2, "0")
              : index === 2
              ? mins.toString().padStart(2, "0")
              : secs.toString().padStart(2, "0")}
          </p>
          <p className="text-primary-900 text-[14px] lg:text-[18px] mt-2">
            {unit}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountDownTimer;
