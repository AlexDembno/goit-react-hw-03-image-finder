import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

function ImageGalleryItem({ webURL, tags }) {
  return (
    <>
      <img className={styles.ImageGalleryItem_image} src={webURL} alt={tags} />
    </>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
