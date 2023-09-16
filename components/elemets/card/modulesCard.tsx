import { FC, PropsWithChildren } from 'react';
import Image from 'next/image';
import styles from './modulesCard.module.scss';

type Props = PropsWithChildren<{ title: string }>;

const Card: FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <div className="imageFrame">
        <Image
          src="https://placehold.jp/640x360.png"
          alt=""
          width={640}
          height={360}
        />
      </div>
      <div className={styles.body}>
        <p className={styles.title}>{title}</p>
        <p className={styles.detail}>{children}</p>
      </div>
    </div>
  );
};

export default Card;
