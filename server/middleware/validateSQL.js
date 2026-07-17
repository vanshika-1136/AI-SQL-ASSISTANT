function validateSQL(sql) {
  sql = sql.replace(/```sql|```/gi, "").trim();

  if (!sql.toUpperCase().startsWith("SELECT")) {
    throw new Error("Only SELECT queries are allowed.");
  }

  return sql;
}

module.exports = validateSQL;