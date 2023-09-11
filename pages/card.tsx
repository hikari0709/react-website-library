import CardStyled from '@/components/elemets/card/cardStyled';

function CardView() {
  return (
    <main>
      <h1>Card</h1>
      <CardStyled title={'cardにheadingを設定したいときに入力してください'}>
        <p>cardのコンテンツをここに入れます</p>
        <div>HTMLなども入れることも自由に入れることができます。</div>
      </CardStyled>
    </main>
  );
}

export default CardView;
