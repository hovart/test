import React from 'react';
import PropTypes from 'prop-types';

function TextInput({
  value,
  onChange,
  placeholder,
  name,
  label,
  type,
  additionalSymbol,
  min,
}) {
  function handleInput(event) {
    const { value } = event.target;
    console.log(min);
    if (type === 'number' && min !== undefined) {
      onChange(value > min ? value : min);
    } else {
      onChange(value);
    }
  }

  return (
    <div className="input input--bold">
      {label !== '' && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        value={value}
        onChange={handleInput}
        placeholder={placeholder}
        type={type}
      />
      {!!additionalSymbol && (
        <span className="additional">{additionalSymbol}</span>
      )}
      <style jsx>{`
        .input {
          position: relative;
          width: 100%;
        }
        .input .additional {
          position: absolute;
          right: 10px;
          top: 2px;
          font-family: 'Montserrat';
          line-height: 36px;
          font-size: 12px;
          font-weight: bold;
          color: #455a64;
        }
        .input::-webkit-input-placeholder {
          color: #ced4da;
        }
        .input:-ms-input-placeholder {
          color: #ced4da;
        }
        .input::-ms-input-placeholder {
          color: #ced4da;
        }
        .input::placeholder {
          color: #ced4da;
        }
        .input input::-webkit-outer-spin-button,
        .input input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .input--location-icon input {
          padding-right: 45px !important;
          background: url(images/location-input-icon.svg) calc(100% - 20px) 50%
            no-repeat;
        }
        .input--phone-icon input {
          padding-right: 45px !important;
          background: url(images/phone-input-icon.svg) calc(100% - 20px) 50%
            no-repeat;
        }
        .input--mail-icon input {
          padding-right: 45px !important;
          background: url(images/mail-input-icon.svg) calc(100% - 20px) 50%
            no-repeat;
        }
        .input--bag-icon input {
          padding-right: 45px !important;
          background: url(images/bag-input-icon.svg) calc(100% - 18px) 50%
            no-repeat;
        }
        .input--web-icon input {
          padding-right: 45px !important;
          background: url(images/web-input-icon.svg) calc(100% - 20px) 50%
            no-repeat;
        }
        .input--calendar-icon input {
          padding-right: 45px !important;
          background: url(images/calendar-input-icon.svg) calc(100% - 20px) 50%
            no-repeat;
        }
        .input--calendar input {
          padding-right: 35px !important;
          background: url(images/calendar-small.svg) calc(100% - 10px) 50%
            no-repeat;
        }
        .input--small-width {
          width: 150px;
        }
        .input--bold input {
          font-weight: bold;
        }
        .input--margin {
          margin-bottom: 24px;
        }
        .input--margin:last-child {
          margin-bottom: 0;
        }
        .input label {
          position: absolute;
          left: 12px;
          top: -6px;
          background: #fff;
          font-weight: 500;
          font-size: 10px;
          color: #99abb4;
          padding: 0 4px;
          display: block;
          line-height: 13px;
        }
        .input input {
          font-family: 'Montserrat';
          width: 100%;
          border: 1px solid #ced4da;
          border-radius: 4px;
          height: 38px;
          padding: 0 24px 0 16px;
          line-height: 36px;
          font-size: 12px;
          color: #455a64;
          outline: none;
        }
        .input--lg input {
          height: 48px;
          font-size: 14px;
        }
        .input--disabled {
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}

TextInput.defaultProps = {
  placeholder: '',
  label: '',
  additionalSymbol: '',
  type: 'text',
};

TextInput.propTypes = {
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  additionalSymbol: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  min: PropTypes.number,
};

export default TextInput;
