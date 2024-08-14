import mongoose from "mongoose";

let connection = { isConnected: null };

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URI);
  connection.isConnected = db.connections;
}

export default dbConnect;
