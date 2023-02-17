import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

// check the MongoDB URI
if (!MONGODB_URI) {
	throw new Error("Please define the MONGODB_URI environmental variable");
}

// check the MongoDB DB
if (!MONGODB_DB) {
	throw new Error("Please define the MONGODB_DB environmental variable");
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
	// check the cached.
	if (cachedClient && cachedDb) {
		// load from cache
		return {
			client: cachedClient,
			db: cachedDb,
		};
	}

	// Connect to cluster
	let client = await MongoClient.connect(MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	let db = await client.db(MONGODB_DB);

	// set cache
	cachedClient = client;
	cachedDb = db;

	return {
		client: cachedClient,
		db: cachedDb,
	};
}
