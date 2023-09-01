import PrimaryHeading from '@/components/elemets/heading/primaryHeading';
import SecondaryHeading from '@/components/elemets/heading/secondaryHeading';

const HeadingView = () => {
  return (
    <main>
      <PrimaryHeading text="h1タグで囲まれたテキストがここに入ります。">
        <p>subtitleを入力する場合</p>
      </PrimaryHeading>
      <SecondaryHeading text="h2タグで囲まれたテキストがここに入ります。">
        <p>subtitleを入力する場合</p>
      </SecondaryHeading>
    </main>
  );
};

export default HeadingView;
