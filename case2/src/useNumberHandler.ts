import { useState } from 'react';

export function useNumberHandler(initialValue: number) {
  const [number, setNumber] = useState(initialValue);

  const inc = () => setNumber((prevNumber) => prevNumber + 1);
  const dec = () => setNumber((prevNumber) => prevNumber - 1);
  const rnd = () => setNumber(Math.floor(Math.random() * 101) - 50);

  const reset = (value: number) => setNumber(value); // Принимаем значение в аргументе и устанавливаем его

  return {
    number,
    inc,
    dec,
    rnd,
    reset,
  };
}
