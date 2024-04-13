import { DefinitionList } from '@/src/app/components/ui-components/DefinitionList/DefinitionList';

const DefinitionListView = () => {
  return (
    <main>
      <h1>説明付きリスト</h1>
      <DefinitionList
        listItem={{
          title: '説明リストのタイトル',
          detail: '説明リストの詳細',
        }}
      />
    </main>
  );
};

export default DefinitionListView;
