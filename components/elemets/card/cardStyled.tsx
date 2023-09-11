/**
 * padding,radius,borderのサイズエレベーションを自由に調整できるようにする
 */
import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

type Props = PropsWithChildren<{ title: string }>;

const CardStyled = styled.div`
  width: 288px;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
`;

const ImageFrame = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 12px;
`;

const Body = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
  box-sizing: border-box;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Detail = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

const Card: FC<Props> = ({ title, children }) => {
  return (
    <CardStyled>
      <ImageFrame>
        <Image
          src="https://placehold.jp/640x360.png"
          alt=""
          width={640}
          height={360}
        />
      </ImageFrame>
      <Body>
        <Title>{title}</Title>
        <Detail>{children}</Detail>
      </Body>
    </CardStyled>
  );
};

export default Card;
