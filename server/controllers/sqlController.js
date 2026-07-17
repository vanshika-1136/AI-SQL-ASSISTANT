const pool = require("../db");
const generateSQL = require("../services/aiService");
const validateSQL = require("../middleware/validateSQL");

const generateQuery = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        success: false,
        message: "Question is required",
      });
    }

    let sql = await generateSQL(question);

    sql = validateSQL(sql);

    const result = await pool.query(sql);

    res.json({
      success: true,
      question,
      sql,
      rows: result.rows,
      count: result.rowCount,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};

module.exports = {
  generateQuery,
};