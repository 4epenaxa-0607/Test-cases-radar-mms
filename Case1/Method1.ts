import { Method2 } from "./Method2";

// Плюсы:
// Нет.
// Минусы:
// Использует цикл генирации случайных индексов, из-за этого будет не эффективен при больщих объемах информации. 


export async function Method1(N: number, collection: any) {
    try {
        console.log('метод 1')

        const startTime = performance.now();

        const totalDocuments = await collection.countDocuments();
        const count = Math.min(N, totalDocuments);
        const randomIndexes: number[] = [];

        while (randomIndexes.length < count) {
            const randomIndex = Math.floor(Math.random() * totalDocuments);
            if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
            }
        }

        const randomDocuments = await Promise.all(
            randomIndexes.map(async (index) => {
            const document = await collection
                .find()
                .skip(index)
                .limit(N)
                .project({ _id: 0, name: 1 })
                .toArray();
  
                console.log(document[0]?.name);
            })
        );
      
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        console.log(`Время выполнения: ${executionTime} мс`);

        Method2(N, collection)
    } 

    catch (e) {
        console.log(e)
    }
}