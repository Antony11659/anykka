// @ts-check

export const up = (knex) =>
  knex.schema.createTable("texts", (table) => {
    table.increments("id").primary();
    table.string("title");
    table.string("content");
  });

export const down = (knex) => knex.schema.dropTable("texts");
