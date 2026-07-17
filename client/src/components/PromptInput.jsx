import { useState } from "react";

function PromptInput({ onGenerate }) {
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    if (!question.trim()) return;

    onGenerate(question);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <textarea
        rows="4"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask anything about your database..."
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />

      <button
        onClick={handleSubmit}
        className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg"
      >
        Generate SQL
      </button>

    </div>
  );
}

export default PromptInput;