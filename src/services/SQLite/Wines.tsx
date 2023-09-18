import { runTransactionQuery } from './SQLite';


type Wine = {
  name: string;
  price: number;
  oldPrice?: number;
  year: string;
  grapes: string;
  country: string;
  region: string;
  description: string;
  picture: string;
};

async function createWinesTable(db: any) {
  await runTransactionQuery(
    db,
    `CREATE TABLE IF NOT EXISTS wines (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price FLOAT NOT NULL,
      oldPrice FLOAT,
      year INTEGER NOT NULL,
      grapes TEXT NOT NULL,
      country TEXT NOT NULL,
      region TEXT NOT NULL,
      description TEXT NOT NULL,
      picture TEXT NOT NULL
    );`,
  );
}

async function insertWine(db: any, wine: Wine) {
  console.log('inserting wine', wine);
  const result: any[] = [
    wine.name,
    wine.price,
    wine.oldPrice,
    wine.year,
    wine.grapes,
    wine.country,
    wine.region,
    wine.description,
    wine.picture
  ];
  await runTransactionQuery(
    db,
    `INSERT INTO wines (name, year, grapes, country, region, description, picture) VALUES (?, ?, ?, ?, ?, ?, ?);`,
    result as any,
  );
}

async function getAllWines(db: any) {
  const { result } = await runTransactionQuery(
    db,
    `SELECT * FROM wines;`,
  ) as any;

  const wines = result?.rows?.raw();

  return wines as Wine[];
}

async function deleteWine(db: any, id: number) {
  await runTransactionQuery(
    db,
    `DELETE FROM wines WHERE id = ?;`,
    [id] as any,
  );
}

async function updateWine(db: any, wine: Wine) {
  const result: any[] = [
    wine.name,
    wine.price,
    wine.oldPrice,
    wine.year,
    wine.grapes,
    wine.country,
    wine.region,
    wine.description,
    wine.picture,
  ];
  await runTransactionQuery(
    db,
    `UPDATE wines SET name = ?, price = ?, oldPrice = ?, year = ?, grapes = ?, country = ?, region = ?, description = ?, picture = ? WHERE id = ?;`,
    result as any,
  );
}

export { createWinesTable, insertWine, getAllWines, deleteWine, updateWine };