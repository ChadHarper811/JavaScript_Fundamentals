import sqlite3 from "sqlite3";
import { open } from "sqlite";

const createTable - async (db) => {
    let query = `CREATE TABLE IF NOT EXISTS employees (
    id data_type PRIMARY KEY,
    email data_type TEXT NOT NULL,
    firstName data_type TEXT NOT NULL,
    lastName data_type TEXT NOT NULL,
    salaryUSD INTEGER,
    localCurrency TEXT NOT NULL,
    startDate TEXT NOT NULL,
    isActive INTEGER
    )`
    return await db.run(query);
};