import mysql from "serverless-mysql";
const dbDev = mysql({
  config: {
    host: "127.0.0.1",
    port: 3306,
    database: "huyen_uy_krongpak",
    user: "root",
    password: "password",
  },
});

const dbProd = mysql({
  config: {
    host: "103.241.43.169",
    port: 3306,
    database: "huyen_uy",
    user: "root",
    password: "frew4fwereefcw213",
  },
});

// Main handler function
export default async function excuteQuery(query: any, values: any) {
  try {
    const results = await dbProd.query(query, values);
    await dbProd.end();
    return results;
  } catch (error: any) {
    return { status: false, error: error.message };
  }
}
