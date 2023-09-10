import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(false);
SQLite.enablePromise(true);

/**
 * @returns {Promise<SQLite.SQLiteDatabase>}
 */
async function getDatabase() {
  const db = await SQLite.openDatabase({
    name: 'wine_db',
    location: 'default',
  });

  return db;
}

/**
 * @param {SQLite.SQLiteDatabase} db
 * @param {string} sqlQuery
 * @returns {Promise<{
 *  transaction: SQLite.Transaction;
 *  result: SQLite.ResultSet
 * }>}
 */
async function runTransactionQuery(db: { transaction: (arg0: (tx: any) => Promise<void>) => any; }, sqlQuery: any, params = []) {
  let result;
  let transaction;
  await db.transaction(async (tx: { executeSql: (arg0: any, arg1: never[]) => PromiseLike<[any, any]> | [any, any]; }) => {
    const [resTransaction, data] = await tx.executeSql(sqlQuery, params);
    result = data;
    transaction = resTransaction;
  });
  return { transaction, result };
}

/**
 * @param {SQLite.SQLiteDatabase} db
 * @returns {Promise<void>}
 */
async function closeDatabase(db: { openDBs: any[]; close: () => any; }) {
  if (db.openDBs[0]) {
    await db.close();
  }else{
  }
}

/**
 * @returns {Promise<void>}
 */
async function deleteDatabase() {
  // const db = await getDatabase();

  await SQLite.deleteDatabase({
    name: 'wine_db',
    location: 'default',
  });
  // await closeDatabase(db);
}

export { getDatabase, closeDatabase, deleteDatabase, runTransactionQuery };
