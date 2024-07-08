// @ts-check

export default {
  translation: {
    appName: "Anykka",
    flash: {
      session: {
        create: {
          success: "You are logged in",
          error: "Wrong email or password",
        },
        delete: {
          success: "You are logged out",
        },
      },
      users: {
        create: {
          error: "Failed to register",
          success: "User registered successfully",
        },
      },
      authError: "Access denied! Please login",
    },
    layouts: {
      application: {
        users: "Users",
        signIn: "Login",
        signUp: "Register",
        signOut: "Logout",
      },
    },
    views: {
      session: {
        new: {
          signIn: "Login",
          submit: "Login",
        },
      },
      users: {
        id: "ID",
        email: "Email",
        createdAt: "Created at",
        new: {
          submit: "Register",
          signUp: "Register",
        },
      },
      about: {
        hello: "Welcome to my awesome App!",
        description: "The description about Anykka will be here soon!",
        more: "Learn more",
      },
    },
  },
};
