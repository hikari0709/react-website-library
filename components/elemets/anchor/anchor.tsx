import ReactNode from 'react';
// カスタムパラメーターを入れたい時もありそう
// 画像などテキスト以外をanchorタグで囲みたい場合どうするのか？

type Props = {
  url: string;
  children: string;
  external?: boolean;
  supplementText?: boolean;
};

const Anchor = ({ url, external, supplementText, children }: Props) => {
  const fixedParams = '?text=tes';
  let attributeValues = {
    href: url + fixedParams,
  };

  let returnHtml = (
    <a
      {...attributeValues}
      className="text-blue-700 underline"
    >
      ${children}
    </a>
  );

  if (external) {
    Object.assign(attributeValues, {
      target: '_blank',
      rel: 'noopener noreferrer',
    });
  }

  if (supplementText) {
    returnHtml = (
      <p>
        参考：
        <a
          {...attributeValues}
          className="text-blue-700 underline"
        >
          {children}
        </a>
      </p>
    );
  }

  return returnHtml;
};

export default Anchor;
