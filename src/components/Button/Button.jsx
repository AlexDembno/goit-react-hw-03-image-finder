import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ loadMore }) {
  return (
    <>
      <button onClick={loadMore} className={styles.Button} type="button">
        Load more
      </button>
    </>
  );
}
export default Button;

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
