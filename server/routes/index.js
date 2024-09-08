// @ts-check

import welcome from "./welcome.js";
import users from "./users.js";
import session from "./session.js";
import start from "./startLearning.js";

const controllers = [welcome, users, session, start];

export default (app) => controllers.forEach((f) => f(app));
