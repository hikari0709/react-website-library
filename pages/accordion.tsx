import Accordion from '@/components/elemets/accordion/accordion';

function AccordionView() {
  return (
    <main>
      <h1>Accordion</h1>
      <section>
        <h2>単体アコーディオン</h2>
        <Accordion />
      </section>
      <section>
        <h2>入れ子になったアコーディオン</h2>
        <details>
          <summary>アコーディオンのtitle</summary>
          <details>
            <summary>アコーディオンのsubtitle</summary>
            pp
          </details>
        </details>
      </section>
    </main>
  );
}

export default AccordionView;
