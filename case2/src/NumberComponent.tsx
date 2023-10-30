import React, { useEffect, useState } from 'react';
import { useNumberHandler } from './useNumberHandler';
import axios from 'axios';

const NumberComponent: React.FC = () => {
  const [randomValue, setRandomValue] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) { // Проверяем, была ли уже загрузка числа
      const fetchRandomNumber = async () => {
        try {
          const response = await axios.get(
            'https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new'
          );
          const value = parseInt(response.data);
          setRandomValue(value);
          setIsLoaded(true); // Устанавливаем, что загрузка числа выполнена
        } catch (error) {
          console.error('Error fetching random number:', error);
        }
      }

      fetchRandomNumber();
    }
  }, [isLoaded]);

  // Создаем переменную для хранения результатов useNumberHandler
  const numberHandler = useNumberHandler(0);

  // Используем useEffect для обновления number при изменении randomValue
  useEffect(() => {
    if (randomValue !== null) {
      numberHandler.reset(randomValue);
    }
  }, [randomValue]);

  return (
    <div>
      <h2>Number Component</h2>
      <p>Number: {numberHandler.number}</p>
      <button onClick={numberHandler.inc}>INC</button>
      <button onClick={numberHandler.dec}>DEC</button>
      <button onClick={numberHandler.rnd}>RND</button>
      <button onClick={() => numberHandler.reset(Number(randomValue))}>RESET</button>
    </div>
  );
};

export default NumberComponent;