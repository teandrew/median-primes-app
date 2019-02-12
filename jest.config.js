module.exports = {
  "jest": {
    "setupFilesAfterEnv": ["<rootDir>src/setupTests.js"],
    "snapshotSerializers": ["enzyme-to-json/serializer"]
  }
}
