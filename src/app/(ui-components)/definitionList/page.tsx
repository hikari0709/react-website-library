import { DefinitionList } from '@/components/ui-components/DefinitionList';
import { Dt } from '@/components/ui-components/DefinitionList/Dt';
import { Dd } from '@/components/ui-components/DefinitionList/Dd';

const DefinitionListView = () => {
  return (
    <main>
      <h1>説明付きリスト</h1>
      <DefinitionList>
        <>
          <Dt>ここにタイトル1が入ります</Dt>
          <Dd>ここに説明文1が入ります。</Dd>
        </>
        <>
          <Dt>ここにタイトル2が入ります</Dt>
          <Dd>ここに説明文2が入ります。</Dd>
        </>
      </DefinitionList>
    </main>
  );
};

export default DefinitionListView;
