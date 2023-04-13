import { useState } from "react";

export default function useCalories() {
  const [ccalCount, setCcalCount] = useState<number>(0);
console.log()
  const clickHendler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let currentResult =
      e.currentTarget['weight'].value * 10 +
      e.currentTarget['height'].value * 6.25 -
      e.currentTarget['age'].value  * 5 +
      ((Boolean(e.currentTarget['gender'].value)) ? 5 : -161)
      console.log(currentResult)
    let finalResult = currentResult * e.currentTarget['activity'].value;
    setCcalCount(Math.trunc(finalResult));
  };

 
  return { ccalCount,clickHendler };
}
