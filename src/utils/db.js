import mongoose from 'mongoose';



const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
      } catch (error) {
        handleError(error);
        throw new Error("Connection Failed!");
      }
    
}


export default connect