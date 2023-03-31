import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, showModal }) => {
  return (
    <li className={css['gallery-item']}>
      <img
        className={css['gallery-image']}
        src={webformatURL}
        alt={tags}
        onClick={() => showModal(largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;
