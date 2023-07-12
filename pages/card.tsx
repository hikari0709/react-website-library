import Card from '@/components/elemets/card/card';

function CardView() {
  return (
    <main>
      <h1>Card</h1>
      <Card headingText={'cardにheadingを設定したいときに入力してください'}>
        <p>cardのコンテンツをここに入れます</p>
        <div>HTMLなども入れることも自由に入れることができます。</div>
      </Card>
    </main>
  );
}

export default CardView;
