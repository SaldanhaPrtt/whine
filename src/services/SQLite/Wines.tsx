import { runTransactionQuery } from './SQLite';


type Wine = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  year: string;
  grapes: string;
  country: string;
  region: string;
  description: string;
  image: string;
};

async function createWinesTable(db: any) {
  await runTransactionQuery(
    db,
    `CREATE TABLE IF NOT EXISTS wines (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price FLOAT NOT NULL,
      oldPrice FLOAT,
      year INTEGER NOT NULL,
      grapes VARCHAR(255) NOT NULL,
      country VARCHAR(255) NOT NULL,
      region VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      image TEXT NOT NULL,
      quantity INTEGER DEFAULT 0
    );`,
  );
}

async function insertWine(db: any, wine: Wine) {
  const result: any[] = [
    wine.id,
    wine.name,
    wine.price,
    wine.oldPrice,
    wine.year,
    wine.grapes,
    wine.country,
    wine.region,
    wine.description,
    wine.image,
  ];
  await runTransactionQuery(
    db,
    `INSERT INTO wines (name, price, oldPrice, year, grapes, country, region, description, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
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
    wine.image,
  ];
  await runTransactionQuery(
    db,
    `UPDATE wines SET name = ?, price = ?, oldPrice = ?, year = ?, grapes = ?, country = ?, region = ?, description = ?, image = ? WHERE id = ?;`,
    result as any,
  );
}

export { createWinesTable, insertWine, getAllWines, deleteWine, updateWine };