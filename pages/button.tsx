import Button from '@/components/elemets/button/button';

const ButtonView = () => {
  return (
    <main>
      <h1>Button</h1>
      <Button>
        <a href="hoge">クリックするような要素は全てbuttonタグで囲む</a>
      </Button>
    </main>
  );
};

export default ButtonView;
