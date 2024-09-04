'use client';
/**
 * 変化する部分はpropsにして渡したい
 * ・列の幅も指定したいときもある
 * ・横スクロールの有無
 * ・colspanやrowspanも操作できるようにしたい、1行の単位をobjectで管理した方が良さそう
 */

export const Table = () => {
  return (
    <div className="js-scrollable overflow-x-scroll">
      <table className="min-w-full">
          <thead>
            <tr>
              <th className="border min-w-36">Col1</th>
              <th className="border min-w-36">Col2</th>
              <th className="border min-w-36">Col3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border min-w-36">Lorem ipsum dolor sit.</td>
              <td className="border min-w-36">Lorem ipsum dolor sit.</td>
              <td className="border min-w-36">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, magnam.</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
};
