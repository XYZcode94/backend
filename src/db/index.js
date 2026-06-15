import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dns from "dns";

dns.setServers([
  "1.1.1.1",
  "8.8.8.8"
]);

const connectDB = async () => {
    try {
        console.log("MONGODB_URI =", process.env.MONGODB_URI);
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB Connected !! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection Failed ", error);
        process.exit(1)
    }
}


export default connectDB