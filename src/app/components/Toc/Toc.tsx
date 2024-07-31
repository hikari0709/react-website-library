import { FC, useRef, useEffect, useState } from 'react';

type tocData = {
  href: string;
  text: string;
};

export const Toc: FC = () => {
  const listRef = useRef(null);
  const [showMoreButton, setShowMoreButton] = useState(false);
  useEffect(() => {
    if (listRef.current) {
      const liCount = listRef.current.children.length;
    }
  }, []);

  // function handleClick() {
  //   ref.current = ref;
  // }
  return (
    <section className="border border-gray-300 rounded-md w-full">
      <p className="text-base font-bold p-4">目次</p>
      <ol
        ref={listRef}
        className="p-4"
      >
        <li>目次1</li>
        <li>目次2</li>
        <li>目次3</li>
        <li>目次4</li>
        <li>目次5</li>
        <li>目次6</li>
        <li>目次7</li>
        <li>目次8</li>
        <li>目次9</li>
        <li>目次10</li>
      </ol>
      {showMoreButton && <button>目次をもっと表示する</button>}
    </section>
  );
};
