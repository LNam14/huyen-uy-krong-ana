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
    host: "13.215.202.31",
    port: 3306,
    database: "huyen_uy_krongpak",
    user: "root",
    password: "takatech0908",
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
