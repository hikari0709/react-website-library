// 入れ子できるようなアコーディオンは別のコンポーネントとして定義する

const Accordion: () => JSX.Element = () => {
  return (
    <details>
      <summary>アコーディオンのtitle</summary>
    </details>
  );
};

export default Accordion;
