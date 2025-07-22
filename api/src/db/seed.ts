import { reset, seed } from "drizzle-seed";
import { db, sql } from "./connection.ts";
import { rooms, questions } from "./schema/index.ts";

// Create a filtered schema without audio_chunks
const seedableSchema = {
  rooms,
  questions,
};

await reset(db, seedableSchema);

await seed(db, seedableSchema).refine((f) => {
  return {
    rooms: {
      count: 5,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
      },
    },
    questions: {
      count: 20,
    },
  };
});

await sql.end();

console.log("Database seeded");
