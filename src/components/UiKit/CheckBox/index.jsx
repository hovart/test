import React from 'react';
import PropTypes from 'prop-types';

function CheckBox({ value, onChange, label, name }) {
  function handleInput() {
    onChange(!value);
  }

  return (
    <div className="checkbox">
      <input type="checkbox" id={name} onClick={handleInput} checked={value} />
      {!!label && <label htmlFor={name}>{label}</label>}
      <style jsx>{`
        .checkbox {
          position: relative;
        }
        .checkbox [type='checkbox']:checked,
        .checkbox [type='checkbox']:not(:checked) {
          position: absolute;
          left: -9999px;
        }
        .checkbox [type='checkbox']:checked + label,
        .checkbox [type='checkbox']:not(:checked) + label {
          position: relative;
          padding-left: 22px;
          cursor: pointer;
          font-weight: 500;
          font-size: 12px;
          line-height: 19px;
          color: #455a64;
          display: inline-block;
        }
        .checkbox [type='checkbox']:checked + label:before,
        .checkbox [type='checkbox']:not(:checked) + label:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 18px;
          height: 18px;
          background: url(/images/check-empty.svg);
        }
        .checkbox [type='checkbox']:checked + label:after {
          content: '';
          width: 18px;
          height: 18px;
          background: url(/images/check.svg);
          position: absolute;
          -webkit-transition: all 0.2s ease;
          -moz-transition: all 0.2s ease;
          -o-transition: all 0.2s ease;
          transition: all 0.2s ease;
          left: 0;
          top: 0;
        }
        .checkbox [type='checkbox']:not(:checked) + label:after {
          content: '';
          width: 18px;
          height: 18px;
          background: url(/images/check.svg);
          position: absolute;
          top: 0px;
          left: 0px;
          -webkit-transition: all 0.2s ease;
          -moz-transition: all 0.2s ease;
          -o-transition: all 0.2s ease;
          transition: all 0.2s ease;
          opacity: 0;
          -webkit-transform: scale(0);
          -moz-transform: scale(0);
          -o-transform: scale(0);
          -ms-transform: scale(0);
          transform: scale(0);
        }
        .checkbox [type='checkbox']:checked + label:after {
          opacity: 1;
          -webkit-transform: scale(1);
          -moz-transform: scale(1);
          -o-transform: scale(1);
          -ms-transform: scale(1);
          transform: scale(1);
        }
        .checkbox [type='checkbox']:disabled:checked + label:before,
        .checkbox [type='checkbox']:disabled:not(:checked) + label:before {
          border-color: #ccc;
          background-color: #eee;
        }
        .checkbox [type='checkbox']:disabled:checked + label:after {
          background: #aaa;
        }
      `}</style>
    </div>
  );
}

CheckBox.defaultProps = {
  label: '',
};

CheckBox.propTypes = {
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default CheckBox;
