import mongoose from "mongoose";
import { DB_URI, NODE_ENV} from "../config/env.js";


if(!DB_URI){
    throw new Error(`Please provide a valid database URI .env.${NODE_ENV}.local file`);
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log("Connected to Database");
        
    } catch (error) {
        console.log("Error Connection to Database ",error);
        process.exit(1);
    }
}

export default connectToDatabase;
