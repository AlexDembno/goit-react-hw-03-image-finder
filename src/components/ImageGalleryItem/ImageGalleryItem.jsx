import styles from './ImageGalleryItem.module.css';

function ImageGalleryItem({ webURL, largeURL, tags }) {
  return (
    <>
      <img className={styles.ImageGalleryItem_image} src={webURL} alt={tags} />
    </>
  );
}

export default ImageGalleryItem;
