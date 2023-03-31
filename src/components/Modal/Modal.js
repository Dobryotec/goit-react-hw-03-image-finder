import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    console.log(e);
    if (e.code === 'Escape') {
      this.props.hideModal();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.hideModal();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressESC);
  }
  render() {
    return (
      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
