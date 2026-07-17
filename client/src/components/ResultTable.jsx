function ResultTable({ rows }) {

  if (!rows || rows.length === 0) return null;

  const headers = Object.keys(rows[0]);

  return (
    <div className="overflow-x-auto mt-8">

      <table className="min-w-full border">

        <thead className="bg-slate-800 text-white">

          <tr>

            {headers.map((head) => (
              <th
                key={head}
                className="px-4 py-3"
              >
                {head}
              </th>
            ))}

          </tr>

        </thead>

        <tbody>

          {rows.map((row, index) => (

            <tr key={index} className="border-b">

              {headers.map((head) => (

                <td
                  key={head}
                  className="px-4 py-3"
                >
                  {String(row[head])}
                </td>

              ))}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ResultTable;