import { FC, PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

/**
 * paddingは持たない or 調整できるようにする
 * headerとbodyとfooterに分けるのも良さそう
 * cardの周辺はshadowの大きさで調整してborderはつけない、radiusはつけておく
 * borderの太さは通常と強調の2種類
 */

type Props = PropsWithChildren<{
  title: string;
  advanced?: boolean;
  padding: 1 | 2 | 4 | 6 | 8;
}>;

const card = tv({
  base: 'rounded border border-defaultBorder',
  variants: {
    padding: {
      1: 'p-1',
      2: 'p-2',
      4: 'p-4',
      6: 'p-6',
      8: 'p-8',
    },
  },
});

export const Card: FC<Props> = ({ children, padding = 4 }) => {
  return (
    <div className={card({ padding })}>
      <div className="w-full h-auto bg-white box-border">{children}</div>
    </div>
  );
};
