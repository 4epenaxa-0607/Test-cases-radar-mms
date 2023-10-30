// Плюсы:
// Исрользует агрегацию mongodb, что делает его более эффективным.
// минусы:
// Нет.

export async function Method2(N: number, collection: any) {
    try {
        console.log('метод 2');
        
        const startTime = performance.now();

        const randomDocuments = await collection.aggregate([
            { $sample: { size: N } },
            { $project: { _id: 0, name: 1 } }
        ]).toArray();

        randomDocuments.forEach((document) => {
            console.log(document.name);
        });

        const endTime = performance.now();
        const executionTime = endTime - startTime;
        console.log(`Время выполнения: ${executionTime} мс`);
    } 

    catch (e) {
        console.log(e)
    }
}
