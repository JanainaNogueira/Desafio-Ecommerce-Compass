import { useState } from "react";

const useCount = (date) => {
  const [seconds, setSeconds] = useState();
  const [minutes, setMinutes] = useState();
  const [hours, setHours] = useState();
  const [days, setDays] = useState();
  const countDown = () => {
    const promoDate = new Date(date).getTime();
    const now = new Date().getTime();

    const interval = promoDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const secondQuantity = Math.floor((interval % minute) / second);
    const minuteQuantity = Math.floor((interval % hour) / minute);
    const hourQuantity = Math.floor((interval % day) / hour);
    const dayQuantity = Math.floor(interval / day);

    setDays(dayQuantity);
    setHours(hourQuantity);
    setMinutes(minuteQuantity);
    setSeconds(secondQuantity);
  };

  setInterval(countDown, 1000);

  return [days, hours, minutes, seconds];
};
export default useCount;
