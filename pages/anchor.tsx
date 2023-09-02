import Anchor from '@/components/elemets/anchor/anchor';

const AnchorView = () => {
  return (
    <main>
      <h1>Anchor</h1>
      <Anchor
        url="https://hikkoshizamurai.jp/estimate/simulator/"
        external={true}
        supplementText={true}
      >
        anchor
      </Anchor>
    </main>
  );
};

export default AnchorView;
