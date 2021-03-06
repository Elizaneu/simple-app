import { DbTestCase, getMocksToWrite } from "src/testing";

const MOCKS_COUNT = 100;

// Inserts an array of mock data into database using only one operation
export default new DbTestCase({
  name: "insertMultiple",
  onRun: async (db) => {
    const mocks = getMocksToWrite(MOCKS_COUNT);
    const collection = db.getCollection();

    await collection.insertMany(mocks);
  },
  onDispose: async (db) => {
    const collection = db.getCollection();
    await collection.deleteMany({});
  },
});
