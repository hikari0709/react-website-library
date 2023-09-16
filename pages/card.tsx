import CardStyled from '@/components/elemets/card/styledCard';
import CardVanillaExtract from '@/components/elemets/card/vanillaExtractCard';
import CardTailwind from '@/components/elemets/card/tailwindCard';
import CardModules from '@/components/elemets/card/modulesCard';

function CardView() {
  return (
    <main>
      <h1>Card Component</h1>
      <CardStyled title={'cardにheadingを設定したいときに入力してください'}>
        <p>style-componentでCSSを記述</p>
        <div>HTMLなども入れることも自由に入れることができます。</div>
      </CardStyled>
      <CardVanillaExtract title={'vanilla-extractでスタイルを記述'}>
        cardのコンテンツをここに入れます
        HTMLなども入れることも自由に入れることができます。
      </CardVanillaExtract>
      <CardTailwind title={'TailwindCSSでスタイルを記述'}>
        cardのコンテンツをここに入れます
        HTMLなども入れることも自由に入れることができます。
      </CardTailwind>
      <CardModules title={'CSS Modulesでスタイルを記述'}>
        cardのコンテンツをここに入れます
        HTMLなども入れることも自由に入れることができます。
      </CardModules>
    </main>
  );
}

export default CardView;
