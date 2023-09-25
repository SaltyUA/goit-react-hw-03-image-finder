import { Component } from 'react';
import { Overlay, Popup } from './Modal.style';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handlePressEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePressEsc);
  }

  handlePressEsc = () => {
    this.props.toggleModal();
  };

  onClick = e => {
    e.stopPropagation();
  };

  render() {
    const { imgURL, alt, toggleModal } = this.props;

    return (
      <Overlay className="overlay" onClick={toggleModal}>
        <Popup onClick={this.onClick}>
          <img src={imgURL} alt={alt} onClick={this.onClick} />
        </Popup>
      </Overlay>
    );
  }
}

export default Modal;
