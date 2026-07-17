import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function SQLBox({ sql }) {

  if (!sql) return null;

  return (
    <div className="mt-6">

      <h2 className="text-xl font-bold mb-3">
        Generated SQL
      </h2>

      <SyntaxHighlighter
        language="sql"
        style={oneDark}
      >
        {sql}
      </SyntaxHighlighter>

    </div>
  );
}

export default SQLBox;