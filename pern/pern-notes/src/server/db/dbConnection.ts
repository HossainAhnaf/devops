import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import 'dotenv/config';

const postgres = process.env.POSTGRES_LOCAL_URL;

const pool = new Pool({
  connectionString: postgres ?? '' + '?sslmode=require',
});
pool.connect()
  .then((client) => {
    console.log('✅ Connected to PostgreSQL');
    client.release(); // Release back to the pool
  })
  .catch((err) => {
    console.error('❌ Failed to connect to PostgreSQL:', err.message);
  });

const db = drizzle(pool);

export default db;
