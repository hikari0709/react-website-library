import { Table } from '@/src/app/components/ui-components/Table/Table';

function TableView() {
  return (
    <main>
      <h1>Table</h1>
      <Table
        head={[[{ text: 'head' }, { text: 'head2' }]]}
        body={[
          ['body', 'body2', ''],
          ['body2-1', 'body2-2', ''],
        ]}
        bodyTableHeader={true}
      />
    </main>
  );
}

export default TableView;
