import { MongoClient } from 'mongodb';
import { Method1 } from './Method1';

const client = new MongoClient('mongodb+srv://Case1:Case1@cluster0.6y1ujnz.mongodb.net/?retryWrites=true&w=majority')

export async function start(N: number){
    try {
        await client.connect()

        console.log('Соединение установлено')

        
        const collection = client.db('Case1').collection('workingWithMongoDB')

        Method1(N, collection)
    } 

    catch (e) {
        console.log(e)
    }
}