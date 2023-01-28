import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

function ImageGallery({ items }) {
  const element = items.map(({ id, webformatURL, largeImageURL, tags }) => (
    <li key={id} className={styles.ImageGalleryItem}>
      <ImageGalleryItem
        webURL={webformatURL}
        largeURL={largeImageURL}
        tags={tags}
      />
    </li>
  ));
  return <ul className={styles.ImageGallery}>{element}</ul>;
}
export default ImageGallery;
