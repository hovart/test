import React from 'react';
import PropTypes from 'prop-types';

function NumberInput({ value, onChange, label, min, max, step }) {
  function handleInput(event) {
    const value = getValidValue(event.target.value);
    onChange(value);
  }

  function getValidValue(num) {
    return num < min ? min : num > max ? max : num;
  }

  return (
    <div className="input input--bold">
      <div className="input-number">
        <a
          className="input-number__down"
          onClick={() => onChange(getValidValue(value - 1))}
        />
        <span className="input-number__input">
          <span>
            <input
              type="number"
              value={value}
              onChange={handleInput}
              min={min}
              max={max}
              step={step}
            />
          </span>
          {label}
        </span>
        <a
          className="input-number__up"
          onClick={() => onChange(getValidValue(value + 1))}
        />
      </div>
      <style jsx>{`
        .input-number {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
        .input-number__down {
          width: 8px;
          height: 13px;
          background: url(/images/input-number-arrow.svg);
          cursor: pointer;
        }
        .input-number__input {
          width: 82px;
          font-weight: 500;
          font-size: 10px;
          color: #455a64;
          text-align: center;
        }
        .input-number__input span {
          display: block;
          margin-bottom: 2px;
        }
        .input-number__input span input {
          font-weight: bold;
          font-size: 13px;
          width: 32px;
          height: 32px;
          border: 1px solid #eef4f8;
          border-radius: 4px;
          text-align: center;
          line-height: 30px;
          -webkit-transition: 0.5s;
          -o-transition: 0.5s;
          transition: 0.5s;
        }
        .input-number__input span input:focus {
          border-color: #455a64;
        }
        .input-number__input span input::-webkit-outer-spin-button,
        .input-number__input span input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .input-number__up {
          width: 8px;
          height: 13px;
          background: url(/images/input-number-arrow.svg);
          -webkit-transform: rotate(-180deg);
          -ms-transform: rotate(-180deg);
          transform: rotate(-180deg);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

NumberInput.defaultProps = {
  label: '',
  step: 1,
};

NumberInput.propTypes = {
  value: PropTypes.any.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

export default NumberInput;
