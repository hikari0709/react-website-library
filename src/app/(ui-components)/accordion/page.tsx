import { Accordion } from '@/components/ui-components/Accordion/';

function Page() {
  return (
    <main>
      <h1>Accordion</h1>
      <Accordion summary={'アコーディオンのサマリーを入れます'}>
        <p>ここに詳細な説明が入ります</p>
      </Accordion>
    </main>
  );
}

export default Page;
