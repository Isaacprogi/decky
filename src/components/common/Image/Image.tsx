import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  onClick?: () => void;
  loading?: 'lazy' | 'eager';
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  style,
  loading = 'eager', 
  onClick,
  ...rest
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      onClick={onClick}
      {...rest} 
    />
  );
};

export default Image;
