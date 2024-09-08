// @ts-check

const BaseModel = require("./BaseModel.cjs");

module.exports = class Text extends BaseModel {
  static get tableName() {
    return "texts";
  }

  static get jsonSchema() {
    return {
      type: "object",
      properties: {
        id: { type: "integer" },
        title: { type: "string", minLength: 1 },
        content: { type: "string", minLength: 1 },
      },
    };
  }
};
