import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  type?: string;
};

/**
 *
 * 「無料」というラベルのようなものを取り外しできるようにしたい
 * ボタンの最大サイズは指定しておくべきな気がするのでいい感じのサイズを指定しておく
 * ボタンテキストを好きなところで改行したという要望もあるかもしれないけどそれにはどう対応するか？
 */

const Button = ({ children, type = 'primary' }: Props) => {
  const backgroundColor = type === 'secondary' ? 'bg-gray-50' : 'bg-green-600';
  const textColor = type === 'secondary' ? 'text-gray-800' : 'text-white';
  return (
    <button
      className={`p-2 border border-defaultBorder rounded ${backgroundColor} ${textColor}`}
    >
      {children}
    </button>
  );
};

export default Button;
