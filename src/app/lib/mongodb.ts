import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

export async function connectToDatabase(): Promise<Mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    console.log("🟡 Connecting to MongoDB...");
    const opts = {
      dbName: "contactDB",
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      console.log("🟢 MongoDB connected successfully!");
      return mongooseInstance;
    }).catch((err) => {
      console.error("🔴 MongoDB connection failed:", err);
      throw err;
    });
  }

  cached.conn = await cached.promise;
  global.mongooseCache = cached;

  return cached.conn;
}
