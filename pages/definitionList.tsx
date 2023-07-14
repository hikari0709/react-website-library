import DefinitionList from '@/components/elemets/definitionList/definitionList';

const DefinitionListView = () => {
  return (
    <main>
      <h1>説明付きリスト</h1>
      <DefinitionList
        listItem={{
          title: '',
          detail: '',
        }}
      />
    </main>
  );
};

export default DefinitionListView;
