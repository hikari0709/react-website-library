import Heading from '@/components/elemets/heading/heading';

const HeadingView = () => {
  return (
    <main>
      <Heading
        level={1}
        text="Headingタグで囲まれたテキストがここに入ります。"
      >
        <p>subtitleを入力する場合</p>
      </Heading>
    </main>
  );
};

export default HeadingView;
