import React from 'react';
import PropTypes from 'prop-types';

function Modal({ children, title, onClose, open }) {
  return (
    <>
      {open && (
        <div className="modal modal--md">
          <div className="modal__head">
            {title && <span className="modal__name">{title}</span>}

            <div className="modal__close" onClick={onClose}>
              <svg className="icon">
                <use xlinkHref="#close"></use>
              </svg>
            </div>
          </div>
          <div className="modal__content  modal__content--top-padding-none">
            {children}
          </div>
        </div>
      )}
      <style jsx>{`
        .modal {
          width: 100%;
          background: #ffffff;
          -webkit-box-shadow: 0px 5px 15px rgba(63, 63, 68, 0.1);
          box-shadow: 0px 5px 15px rgba(63, 63, 68, 0.1);
          border-radius: 4px;
          display: block;
          overflow: auto;
        }
        .modal--sm {
          max-width: 500px;
        }
        .modal--md {
          max-width: 700px;
        }
        .modal--lg {
          max-width: 1062px;
        }

        .modal__head {
          position: relative;
          padding: 24px;
          width: 100%;
          border-bottom: 1px solid #f2f0f0;
        }
        .modal__content {
          padding: 24px;
        }
        .modal__content--top-padding-none {
          padding: 0 24px 24px 24px;
        }
        .modal__content--vertical-padding-none {
          padding: 0 24px;
        }

        .modal__name {
          font-weight: bold;
          font-size: 14px;
          color: #99abb4;
        }

        .modal__title {
          font-weight: bold;
          font-size: 24px;
          color: #455a64;
          display: block;
          text-align: center;
        }
        .modal__title small {
          display: block;
          font-weight: 500;
          font-size: 14px;
          color: #99abb4;
          padding-top: 16px;
        }

        .modal__close {
          cursor: pointer;
          position: absolute;
          right: 24px;
          top: 24px;
          -webkit-transition: 0.5s;
          -o-transition: 0.5s;
          transition: 0.5s;
        }
        .modal__close:hover {
          color: #455a64;
        }
        .modal__close .icon {
          width: 14px;
          height: 14px;
          color: #ced4da;
        }
      `}</style>
    </>
  );
}

Modal.defaultProps = {
  open: false,
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Modal;
