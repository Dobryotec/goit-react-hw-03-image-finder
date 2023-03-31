import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  return (
    <li className={css['gallery-item']}>
      <img className={css['gallery-image']} src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
