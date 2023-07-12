import Table from '@/components/elemets/table/table';

function TableView() {
  return (
    <main>
      <h1>Table</h1>
      <Table
        head={[['head', 'head2']]}
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
