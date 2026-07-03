import { createClient } from "redis";

let client;

async function getRedis() {
  if (!client) {
    client = createClient({
      url: process.env.REDIS_URL,
    });

    await client.connect();
  }

  return client;
}

export default async function handler(req, res) {
  const redis = await getRedis();

  const count = await redis.incr("visitor_count");

  res.status(200).json({
    count,
  });
}