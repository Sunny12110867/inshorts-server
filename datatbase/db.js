import mongoose from 'mongoose';

const Connection = async()=>{     
    const URL = `mongodb://sunny:bhardwaj@ac-nnlsa6j-shard-00-00.zqyhfo3.mongodb.net:27017,ac-nnlsa6j-shard-00-01.zqyhfo3.mongodb.net:27017,ac-nnlsa6j-shard-00-02.zqyhfo3.mongodb.net:27017/?ssl=true&replicaSet=atlas-f95n05-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
    await mongoose.connect(URL, {useNewUrlParser: true});
    console.log('Database connection successfully');
    }catch(error){
        console.log('error while connecting with the database',error);
    }
}

export default Connection;
