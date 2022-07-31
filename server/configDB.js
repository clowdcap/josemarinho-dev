import sqlite3 from "sqlite3"
import { open } from "sqlite"

const database_name = 'Newsletter.db'

export async function openDb() {
    return open({
        filename: `./database/${database_name}`,
        driver: sqlite3.Database
     })
}