// @ts-check

import i18next from "i18next";
import createWords from "../helpers/utils.js";

export default (app) => {
  app.get("/start", { name: "startLearning" }, async (req, reply) => {
    const texts = await app.objection.models.text.query();
    reply.render("start/index", { texts });
    return reply;
  });

  app.get("/start/new", { name: "newText" }, async (req, reply) => {
    reply.render("start/new");
    // create the new text
    return reply;
  });
  app.get("/start/learn", { name: "learnText" }, async (req, reply) => {
    // show the chosen text and learn it
    return reply;
  });

  app.post("/start/new", async (req, reply) => {
    const validText = new app.objection.models.text();
    const words = createWords(req.body.content);
    reply.send(words);
    validText.$set(req.body);

    try {
      // await app.objection.models.text.query().insert(validText);
      // reply.redirect("/start");
    } catch (error) {
      reply.send(error.message);
    }
    // 1) split the text into words
    // 2) save words and the text
  });
};
