import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

function ImageGallery({ items, openModal }) {
  const element = items.map(({ id, webformatURL, largeImageURL, tags }) => (
    <li
      onClick={() => openModal(largeImageURL)}
      key={id}
      className={styles.ImageGalleryItem}
    >
      <ImageGalleryItem webURL={webformatURL} tags={tags} />
    </li>
  ));
  return <ul className={styles.ImageGallery}>{element}</ul>;
}
export default ImageGallery;
