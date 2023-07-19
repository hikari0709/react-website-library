import Anchor from '@/components/elemets/anchor/anchor';

const AnchorView = () => {
  return (
    <main>
      <h1>Anchor</h1>
      <Anchor
        url="exampleURL"
        external={true}
      >
        anchor
      </Anchor>
    </main>
  );
};

export default AnchorView;
