# 🤖 AI SQL Query Assistant

### Natural Language to SQL Query Generation

AI SQL Query Assistant is an AI-powered application that allows users to interact with a PostgreSQL database using **natural language**.

Instead of manually writing SQL queries, users can ask questions such as:

> "Show me the top 10 products by price."

The system understands the request, generates an SQL query based on the database schema, validates the query, and executes safe read-only queries against the database.

---

## ✨ Features

- 💬 Ask database questions using natural language
- 🤖 AI-powered SQL query generation
- 🗄️ PostgreSQL database integration
- 🧠 Schema-aware query generation
- 🔐 Read-only SQL execution
- ⚡ Real-time query results
- 🖥️ Interactive React interface
- 🔄 Natural language → SQL → Database → Results workflow

---

## 🔄 How It Works

```text id="b4g6r2"
User enters a natural-language question
                ↓
        React Frontend
                ↓
        Express.js Backend
                ↓
       Database Schema
                ↓
          LLM / AI Model
                ↓
       Generated SQL Query
                ↓
        Query Validation
                ↓
      PostgreSQL Database
                ↓
          Query Results
                ↓
        React Interface
```

---

## 🧠 AI Query Generation

The system provides the database schema to the AI model so that SQL queries can be generated according to the actual tables and columns available in the database.

For example:

**User:**

```text
Find the products with the highest ratings.
```

**Generated SQL:**

```sql
SELECT name, rating
FROM products
ORDER BY rating DESC
LIMIT 10;
```

The generated query is then validated before execution.

---

## 🔐 Query Safety

The application is designed for **read-only database interaction**.

Only `SELECT` queries are allowed.

Operations such as:

```sql
INSERT
UPDATE
DELETE
DROP
ALTER
TRUNCATE
```

are rejected.

This helps prevent accidental modification of database data through AI-generated queries.

---

## 🏗️ Architecture

```text id="2x6q7p"
┌──────────────────────┐
│      React + Vite    │
│      Frontend        │
└──────────┬───────────┘
           │
           │ HTTP API
           ▼
┌──────────────────────┐
│   Node.js + Express  │
│      Backend         │
└──────────┬───────────┘
           │
     ┌─────┴──────┐
     │            │
     ▼            ▼
┌──────────┐  ┌──────────────┐
│ LLM/API  │  │ PostgreSQL   │
│          │  │   / Neon     │
└──────────┘  └──────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
- CSS

### Backend

- Node.js
- Express.js

### Database

- PostgreSQL
- Neon

### AI

- LLM API
- Schema-aware prompt engineering

### Deployment

- Vercel
- Render
- Neon PostgreSQL

---

## 📁 Project Structure

```text id="c1m5vl"
AI-SQL-ASSISTANT/
│
├── client/
│   ├── src/
│   └── ...
│
├── server/
│   ├── server.js
│   └── ...
│
├── package.json
├── README.md
└── .gitignore
```

> Project structure may vary depending on the current implementation.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash id="e9g2h1"
git clone https://github.com/vanshika-1136/AI-SQL-ASSISTANT.git
cd AI-SQL-ASSISTANT
```

### 2. Install dependencies

Frontend:

```bash id="5u7z0x"
npm install
```

Backend:

```bash id="h6b1p9"
cd server
npm install
```

### 3. Configure environment variables

Create a `.env` file for the backend.

Example:

```env id="8r3j2m"
DATABASE_URL=your_postgresql_connection_string
OPENROUTER_API_KEY=your_api_key
```

Replace the placeholders with your own credentials.

> ⚠️ Never commit `.env` files, API keys, database credentials, or other secrets to GitHub.

Add `.env` to `.gitignore`:

```text id="p8z4k1"
.env
.env.local
```

### 4. Start the backend

```bash id="s4v6n2"
npm run dev
```

### 5. Start the frontend

From the frontend directory:

```bash id="r3k7x1"
npm run dev
```

---

## 🌐 Live Demo

🔗 **Live Application:**  
https://ai-sql-assistant-t1un.vercel.app

---

## 💡 Example Queries

Users can ask questions such as:

```text
Show the top 10 products by rating.

Find products priced below 1000.

How many products are available?

Show the most popular products.

Find products with more than 20% discount.
```

The assistant converts these natural-language questions into SQL queries and returns the corresponding database results.

---

## 🎯 Key Learning Outcomes

This project provided practical experience with:

- Natural Language Processing applications
- LLM API integration
- Prompt engineering
- Schema-aware SQL generation
- SQL query validation
- PostgreSQL
- REST API development
- React and Node.js integration
- Secure read-only database interaction
- Full-stack application deployment

---

## 🔮 Future Improvements

- Support for more complex SQL queries
- Query explanation in natural language
- SQL query optimization suggestions
- Query history
- Multiple database connections
- Improved SQL validation
- Automatic schema discovery
- Query-result visualization
- Conversational follow-up questions

---

## 👩‍💻 Author

**Vanshika**

B.E. Computer Science & Engineering  
UIET, Panjab University, Chandigarh

🔗 GitHub: `vanshika-1136`

🔗 LinkedIn: `vanshika-dhariya-486a872b1`

---

⭐ If you find this project useful, consider giving the repository a star!
