import Image from 'next/image';

export const Img = ({ ...args }) => {
  const { src, alt, width, height, ...other } = args;
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...other}
    />
  );
};
