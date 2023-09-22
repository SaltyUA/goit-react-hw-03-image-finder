const GalleryItem = ({ largeImageUrl, webformatURL }) => {
  return (
    <li>
      <a href={largeImageUrl}>
        <img src={webformatURL} alt="" />
      </a>
    </li>
  );
};

export default GalleryItem;
