import app from "./app.js";
import sequelize from "./config/db.js";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Coexão estabelecida com a base de dados.");
    app.listen(PORT, () => {
      console.log(`Server rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao conectar a base de dados:", error);
  }
}

main();
