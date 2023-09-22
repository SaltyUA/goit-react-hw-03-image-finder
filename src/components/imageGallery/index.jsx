import GalleryItem from 'components/galleryItem';
import React from 'react';

const ImageGallery = ({ gallery }) => {
  return (
    <ul>
      {gallery.map(({ id, largeImageUrl, webformatURL }) => {
        return (
          <GalleryItem
            key={id}
            largeImageUrl={largeImageUrl}
            webformatURL={webformatURL}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
