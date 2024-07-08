// @ts-check

export default (app) => {
  app
    .get("/", { name: "root" }, (req, reply) => {
      reply.render("about/index");
    })
    .get(
      "/protected",
      { name: "protected", preValidation: app.authenticate },
      (req, reply) => {
        reply.render("about/index");
      }
    );
};
