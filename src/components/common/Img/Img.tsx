import React from 'react';
import Image from 'next/image';
import { ImageD } from './Img.d';
import { ImgWrapper } from './Img.styles';

const Img: React.FC<ImageD> = ({
  src,
  alt,
  loader,
  layout,
  width,
  height,
  hoverEffect,
  boxShadow,
  borderRadius,
  ...rest
}) => (
  <ImgWrapper
    width={width}
    height={height}
    boxShadow={boxShadow}
    borderRadius={borderRadius}
    hoverEffect={hoverEffect}
    {...rest}
  >
    {height || width
      ? <Image alt={alt} src={src} layout={layout} width={width} height={height} loader={loader} />
      : <Image alt={alt} src={src} layout="fill" objectFit="cover" loader={loader} />}
  </ImgWrapper>
);

export default Img;
