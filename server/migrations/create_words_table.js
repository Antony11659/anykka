// @ts-check

export const up = (knex) =>
  knex.schema.createTable("words", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.integer("attempts").defaultTo(0);
    table.integer("guesses").defaultTo(0);
  });

export const down = (knex) => knex.schema.dropTable("words");
