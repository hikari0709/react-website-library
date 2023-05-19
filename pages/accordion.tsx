import Accordion from '@/components/elemets/accordion/accordion';

function AccordionView() {
  return (
    <main>
      <h1>Accordion</h1>
      <Accordion summary={'アコーディオンのサマリーを入れます'}>
        <p>ここに詳細な説明が入ります</p>
      </Accordion>
    </main>
  );
}

export default AccordionView;
