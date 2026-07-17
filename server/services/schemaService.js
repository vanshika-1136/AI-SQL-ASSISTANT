const pool = require("../db");

async function getSchema() {
  const query = `
SELECT table_name,column_name,data_type
FROM information_schema.columns
WHERE table_schema='public'
ORDER BY table_name,ordinal_position;
`;

  const result = await pool.query(query);

  let schema = "";

  let currentTable = "";

  result.rows.forEach((row) => {
    if (currentTable !== row.table_name) {
      currentTable = row.table_name;
      schema += `\nTable: ${currentTable}\n`;
    }

    schema += `- ${row.column_name} (${row.data_type})\n`;
  });

  return schema;
}

module.exports = getSchema;