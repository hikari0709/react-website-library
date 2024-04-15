import { Images } from '@/components/Image/';

const ImagesView = () => {
  return (
    <main>
      <h1>Images</h1>
      <Images
        src="text.jpg"
        alt="test"
        width="500"
        height="500"
      />
    </main>
  );
};

export default ImagesView;
