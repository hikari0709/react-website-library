'use client';
import { FC, PropsWithChildren } from 'react';
import Image from 'next/image';

/**
 * 画像が必ずあるとは限らないので変数もしくはchildrenとしての扱いに変える
 * そうなるとcardコンポーネントはborderとpaddingを持っているだけのものになる？
 * paddingも画像をcardコンポーネント全体に広げて表示したい場合には必要がない時もある
 * 調整したいところは、border-radiusの有無、大きさも調整したい？とpaddingの有無と大きさ
 * もしかするとPRなどつけたい時にラップするborderの色や太さ、種類も変えたい場合もあるかもしれない
 */

type Props = PropsWithChildren<{
  title: string;
  bgColor?: string;
  advanced?: boolean;
}>;

export const Card: FC<Props> = ({ title, children, bgColor }) => {
  return (
    <div className={`w-72 rounded p-2 border border-defaultBorder ${bgColor}`}>
      <div className="w-full h-auto mb-3">
        {/* <Image
          src="https://placehold.jp/640x360.png"
          alt=""
          width={640}
          height={360}
        /> */}
      </div>
      <div className="w-full h-auto bg-white box-border">
        <p className="text-lg font-bold mb-1">{title}</p>
        <p className="text-sm">{children}</p>
      </div>
    </div>
  );
};
