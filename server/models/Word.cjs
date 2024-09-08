// @ts-check

const BaseModel = require("./BaseModel.cjs");

module.exports = class Word extends BaseModel {
  static get tableName() {
    return "words";
  }

  static get jsonSchema() {
    return {
      type: "object",
      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1 },
        attempts: { type: "integer" },
        guesses: { type: "integer" },
      },
    };
  }

  incrementAttempts() {
    return this.$query().increment("attempts", 1);
  }

  incrementGuesses() {
    return this.$query().increment("guesses", 1);
  }
};
