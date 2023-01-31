import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

function ImageGallery({ items, openModal }) {
  const element = items.map(({ id, webformatURL, largeImageURL, tags }) => (
    <li
      key={id}
      onClick={() => openModal(largeImageURL)}
      className={styles.ImageGalleryItem}
    >
      <ImageGalleryItem webURL={webformatURL} tags={tags} />
    </li>
  ));
  return <ul className={styles.ImageGallery}>{element}</ul>;
}
export default ImageGallery;

ImageGallery.propTypes = {
  openModal: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
