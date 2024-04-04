import { Card } from '@/components/elemets/Card/Card';

function CardView() {
  return (
    <main>
      <h1>Card Component</h1>
      <Card title={'TailwindCSSでスタイルを記述'}>
        cardのコンテンツをここに入れます
        HTMLなども入れることも自由に入れることができます。
      </Card>
    </main>
  );
}

export default CardView;
