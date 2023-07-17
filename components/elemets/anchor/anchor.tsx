import ReactNode from 'react';
// カスタムパラメーターを入れたい時もありそう
// 画像などテキスト以外をanchorタグで囲みたい場合どうするのか？

type Props = {
  url: string;
  children: string;
  external?: boolean;
};

const Anchor = ({ url, external, children }: Props) => {
  const fixedParams = '?text=tes';
  let attributeValues = {
    href: url + fixedParams,
  };

  if (external) {
    Object.assign(attributeValues, {
      target: '_blank',
      rel: 'noopener noreferrer',
    });
  }

  return <a {...attributeValues}>{children}</a>;
};

export default Anchor;
