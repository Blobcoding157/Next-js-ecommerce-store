import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

// Type needed for the connection function below

declare module globalThis {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

// Connect only once to the database

function connectOneTimeToDatabase() {
  if (!globalThis.postgresSqlClient) {
    globalThis.postgresSqlClient = postgres({
      transform: { ...postgres.camel, undefined: null },
    });
  }
  return globalThis.postgresSqlClient;
}

// connect to postgres
export const sql = connectOneTimeToDatabase();
