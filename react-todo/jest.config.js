export default {
    testEnvironment: "jsdom", // Ensures Jest can test React components
    transform: {
      "^.+\\.jsx?$": "babel-jest",
    },
    moduleDirectories: ["node_modules", "src"],
  };
  