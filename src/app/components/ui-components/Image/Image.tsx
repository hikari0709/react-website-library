'use client';
type Props = {
  src: string;
  alt: string;
  width: string;
  height: string;
  caption?: string;
};

export const Images = ({ src, alt, width, height, caption }: Props) => {
  const shared = (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="bg-gray-500"
    />
  );

  let element = shared;

  if (caption) {
    element = (
      <figure>
        {shared}
        <figcaption>{caption}</figcaption>
      </figure>
    );
  }

  return element;
};
