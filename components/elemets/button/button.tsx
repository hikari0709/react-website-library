import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  label?: string;
  type?: string;
};

/**
 *
 * paddingを調整できる必要があるのか？
 * ボタンの最大サイズは指定しておくべきな気がするのでいい感じのサイズを指定しておく
 * ボタンテキストを好きなところで改行したという要望もあるかもしれないけどそれにはどう対応するか？
 */

export const Button = ({ children, type = 'primary', label }: Props) => {
  const backgroundColor = type === 'secondary' ? 'bg-gray-50' : 'bg-green-600';
  const textColor = type === 'secondary' ? 'text-gray-800' : 'text-white';
  return (
    <button
      className={`bg-brand-50 p-2 border-divider rounded ${backgroundColor} ${textColor}`}
    >
      {label && (
        <span className="text-green-600 bg-white p-1 rounded-sm mr-2">
          {label}
        </span>
      )}
      {children}
    </button>
  );
};
