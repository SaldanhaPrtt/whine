import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(false);
SQLite.enablePromise(true);

async function getDatabase() {
  const db = await SQLite.openDatabase({
    name: 'wine_db',
    location: 'default',
  });

  return db;
}

async function runTransactionQuery(db: any, sqlQuery: any, params = []) {
  let result;
  let transaction;
  await db.transaction(async (tx: any) => {
    const [resTransaction, data] = await tx.executeSql(sqlQuery, params);
    result = data;
    transaction = resTransaction;
  });
  return { transaction, result };
}

async function closeDatabase(db: any) {
  if (db.openDBs[0]) {
    await db.close();
  }else{
  }
}

async function deleteDatabase() {
  // const db = await getDatabase();

  await SQLite.deleteDatabase({
    name: 'wine_db',
    location: 'default',
  });
  // await closeDatabase(db);
}

export { getDatabase, closeDatabase, deleteDatabase, runTransactionQuery };
