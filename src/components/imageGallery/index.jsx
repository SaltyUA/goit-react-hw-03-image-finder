import GalleryItem from 'components/GalleryItem';
import React from 'react';
import { ImageGalleryGrid } from './ImageGallery.styled';

const ImageGallery = ({ gallery, showModal }) => {
  return (
    <ImageGalleryGrid>
      {gallery.map(({ id, largeImageURL, webformatURL, tags }) => {
        return (
          <GalleryItem
            key={id}
            largeImageURL={largeImageURL}
            webformatURL={webformatURL}
            showModal={showModal}
            alt={tags}
          />
        );
      })}
    </ImageGalleryGrid>
  );
};

export default ImageGallery;
