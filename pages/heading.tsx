import Heading from '@/components/elemets/heading/heading';

const HeadingView = () => {
  return (
    <main>
      <Heading level="h1">
        Headingタグで囲まれたテキストがここに入ります。
        <p>subtitleを入力する場合</p>
      </Heading>
    </main>
  );
};

export default HeadingView;
