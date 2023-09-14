import CardStyled from '@/components/elemets/card/cardStyled';
import CardVanillaExtract from '@/components/elemets/card/vanillaExtractCard';
import CardTailwind from '@/components/elemets/card/tailwindCard';

function CardView() {
  return (
    <main>
      <h1>Card</h1>
      <CardStyled title={'cardにheadingを設定したいときに入力してください'}>
        <p>cardのコンテンツをここに入れます</p>
        <div>HTMLなども入れることも自由に入れることができます。</div>
      </CardStyled>
      <CardVanillaExtract
        title={'cardにheadingを設定したいときに入力してください'}
      >
        cardのコンテンツをここに入れます
        HTMLなども入れることも自由に入れることができます。
      </CardVanillaExtract>
      <CardTailwind title={'cardにheadingを設定したいときに入力してください'}>
        cardのコンテンツをここに入れます
        HTMLなども入れることも自由に入れることができます。
      </CardTailwind>
    </main>
  );
}

export default CardView;
