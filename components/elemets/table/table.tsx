/**
 * 変化する部分はpropsにして渡したい
 * ・列の幅も指定したいときもある
 * ・横スクロールの有無
 * ・colspanやrowspanも操作できるようにしたい、1行の単位をobjectで管理した方が良さそう
 */
interface Cell {
  text: string;
  row?: number;
  col?: number;
}
type Props = {
  head: Array<Array<Cell>>;
  body: Array<Array<string>>;
  bodyTableHeader?: Boolean;
};

const Table = ({ head, body, bodyTableHeader }: Props): JSX.Element => {
  return (
    <table className="border border-solid border-gray-300">
      <thead>
        {head.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <th
                key={cellIndex}
                className="border border-solid border-gray-300"
              >
                {}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {body.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) =>
              bodyTableHeader && cellIndex === 0 ? (
                <th
                  key={cellIndex}
                  className="border border-solid border-gray-300"
                >
                  {cell}
                </th>
              ) : (
                <td
                  key={cellIndex}
                  className="border border-solid border-gray-300"
                >
                  {cell}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
