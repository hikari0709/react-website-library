type Props = {
  src: string;
  alt: string;
  width: string;
  height: string;
  caption?: boolean;
};

const Images = ({ src, alt, width, height, caption }: Props) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Images;
