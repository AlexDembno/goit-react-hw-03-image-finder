import { Component } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

const modalEl = document.querySelector('#modal');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentDidUpdate() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ key, target, currentTarget }) => {
    if (key === 'Escape' || target === currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <div className={styles.Overlay} onClick={this.closeModal}>
        <div className={styles.Modal}>
          <img src={this.props.largeImageURL} alt={this.props.tags} />
        </div>
      </div>,
      modalEl
    );
  }
}

export default Modal;
