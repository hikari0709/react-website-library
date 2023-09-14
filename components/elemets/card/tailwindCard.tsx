import { FC, PropsWithChildren } from 'react';
import Image from 'next/image';

type Props = PropsWithChildren<{ title: string }>;

const Card: FC<Props> = ({ title, children }) => {
  return (
    <div className="w-72 rounded p-2 border border-defaultBorder">
      <div className="w-full h-auto mb-3">
        <Image
          src="https://placehold.jp/640x360.png"
          alt=""
          width={640}
          height={360}
        />
      </div>
      <div className="w-full h-auto bg-white box-border">
        <p className="text-lg font-bold mb-1">{title}</p>
        <p className="text-sm">{children}</p>
      </div>
    </div>
  );
};

export default Card;
