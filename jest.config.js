module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
    "^axios$": require.resolve("axios"),
  },
  setupFiles: ["./tests/setup.js"],
  testMatch: [
    "**/__tests__/**/*.spec.[jt]s?(x)",
    "**/tests/unit/**/*.spec.[jt]s?(x)",
  ],
  transformIgnorePatterns: ["/node_modules/"], // Pastas que devem ser ignoradas na transformação
  collectCoverage: true, // Habilita a coleta de cobertura de código
  coverageReporters: ["html", "text-summary"], // Formatos de relatórios de cobertura
  coverageDirectory: "<rootDir>/coverage", // Pasta onde os relatórios de cobertura serão gerados
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx,vue}",
    "!src/modules/core/**",
    "!src/main.js", // Arquivo de entrada principal, normalmente não precisa ser coberto
    "!src/router/**", // Arquivos de configuração do router, normalmente não precisam ser cobertos
    "!**/node_modules/**", // Pastas de node_modules, normalmente não precisam ser cobertas
  ],
};
