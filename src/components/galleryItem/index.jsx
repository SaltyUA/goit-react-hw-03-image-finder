import { GalleryImage, GalleryItemStyled } from './GalleryImage.styled';

const GalleryItem = ({ largeImageURL, webformatURL, showModal, alt }) => {
  return (
    <GalleryItemStyled onClick={() => showModal(largeImageURL, alt)}>
      <GalleryImage src={webformatURL} alt={alt} />
    </GalleryItemStyled>
  );
};

export default GalleryItem;
