import { useState } from "react";

import api from "../services/api";

import Navbar from "../components/Navbar";
import PromptInput from "../components/PromptInput";
import SQLBox from "../components/SQLBox";
import ResultTable from "../components/ResultTable";
import Loader from "../components/Loader";

function Home() {

  const [loading, setLoading] = useState(false);

  const [sql, setSql] = useState("");

  const [rows, setRows] = useState([]);

  const generateSQL = async (question) => {

    try {

      setLoading(true);

      const res = await api.post("/sql/generate-sql", {
        question,
      });

      setSql(res.data.sql);

      setRows(res.data.rows);

    } catch (err) {

      alert(err.response?.data?.message || "Server Error");

    } finally {

      setLoading(false);

    }

  };

  return (

    <>

      <Navbar />

      <div className="max-w-6xl mx-auto p-8">

        <PromptInput onGenerate={generateSQL} />

        {loading && <Loader />}

        <SQLBox sql={sql} />

        <ResultTable rows={rows} />

      </div>

    </>

  );
}

export default Home;