// Конфигурация jest
// https://jestjs.io/docs/en/configuration

module.exports = {
  verbose: true,
  roots: ["./autotest"],
  preset: "jest-puppeteer",
  setupFilesAfterEnv: ["./jest.setup.js"],
};
